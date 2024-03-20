import Axios from 'axios';
export const formatCurrency = (amount: string | number, decimalPlaces = 0, showDollar = true): string => {
	if (!amount) return '';
	if (typeof amount === 'string') amount = amount.replaceAll(',', '');
	return Intl.NumberFormat('en-US', {
		style: showDollar ? 'currency' : 'decimal',
		currency: 'USD',
		maximumFractionDigits: decimalPlaces,
	}).format(Number(amount));
};
export const toNum = (val: string): number | undefined => {
	if (!val) return undefined;
	val = val.replaceAll(',', '');
	val = val.replaceAll('%', '');
	val = val.replaceAll('$', '');
	return Number(val);
};
export const toFraction = (val: string | number | null | undefined): string => {
	if (!val) return '';
	const splitVal = val.toString().split('.');
	const numerator = Number(splitVal[1]);
	let fraction = splitVal[1] ? `${numerator}/16` : '';
	if (numerator === 2) {
		fraction = '1/8';
	} else if (numerator === 4) {
		fraction = '1/4';
	} else if (numerator === 6) {
		fraction = '3/8';
	} else if (numerator === 8) {
		fraction = '1/2';
	} else if (numerator === 10) {
		fraction = '5/8';
	} else if (numerator === 12) {
		fraction = '3/4';
	} else if (numerator === 14) {
		fraction = '7/8';
	}
	return `${splitVal[0]} ${fraction}`;
};
export const unpackError = (error?: unknown) => {
	if (!error) {
		return { message: 'An unknown error has occurred.' };
	}
	if (Axios.isAxiosError(error)) {
		const data = error.response?.data;
		return { message: data ?? data?.error ?? error.message, data };
	}
	if (error instanceof Error) {
		return { message: error.message };
	}
	return { message: String(error) };
};
export const formatZip = (zip = '') => {
	if (zip.length > 5) {
		return `${zip.slice(0, 5)}-${zip.slice(5)}`;
	}
	return zip;
};

const stringToColor = (string: string) => {
	let hash = 0;
	let i;

	/* eslint-disable no-bitwise */
	for (i = 0; i < string.length; i += 1) {
		hash = string.charCodeAt(i) + ((hash << 5) - hash);
	}

	let color = '#';

	for (i = 0; i < 3; i += 1) {
		const value = (hash >> (i * 8)) & 0xff;
		color += `00${value.toString(16)}`.slice(-2);
	}
	/* eslint-enable no-bitwise */

	return color;
};

export const stringAvatar = (name: string) => {
	return {
		sx: {
			bgcolor: stringToColor(name),
			width: '35px',
			height: '35px',
		},
		children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
	};
};

export const getFileNameFromPath = (path: string | null | undefined): string => {
	if (!path) return '';
	return path?.split('/').slice(-1)[0];
};
export const getFileExtensionFromPath = (path: string | null | undefined): string => {
	if (!path) return '';
	return path?.split('.').slice(-1)[0];
};
export const formatBytes = (bytes?: number, decimals?: number, bytesPerKilo = 1024) => {
	if (!bytes) return '0 Bytes';
	const dm = decimals || 2,
		sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
		i = Math.floor(Math.log(bytes) / Math.log(bytesPerKilo));
	return parseFloat((bytes / Math.pow(bytesPerKilo, i)).toFixed(dm)) + ' ' + sizes[i];
};
export const base64ToUrl = (base64String: string) => {
	const blob = new TextEncoder().encode(base64String);
	return URL.createObjectURL(new Blob([blob], { type: 'application/pdf' }));
};
const blobToBase64 = (blob: Blob) => {
	const reader = new FileReader();
	reader.readAsDataURL(blob);
	return new Promise(resolve => {
		reader.onloadend = () => {
			resolve(reader.result);
		};
	});
};
export const saveData = (data: Blob, attachmentId: number, mimeType: string, fileName: string, callback?: (attachmentId: number) => void, download = false) => {
	if (!mimeType || !fileName) return;
	if (!download && (mimeType.indexOf('pdf') > -1 || mimeType.indexOf('gif') > -1 || mimeType.indexOf('jpg') > -1 || mimeType.indexOf('jpeg') > -1 || mimeType.indexOf('png') > -1)) {
		const fileURL = URL.createObjectURL(data);
		const win = window.open('');
		setTimeout(
			() =>
				win?.document.write(
					`<html><head><title>${fileName}</title></head><body style="margin: 0"><object width="${mimeType.indexOf('pdf') > -1 ? '100%' : '-webkit-fill-available'}" height="${mimeType.indexOf('pdf') > -1 ? '100%' : '-webkit-fill-available'}" type="${
						mimeType ?? 'application/pdf'
					}" data="${fileURL}"></object></body></html>`
				),
			1
		);
		setTimeout(() => win?.stop(), 1);
	} else {
		blobToBase64(data).then(res => {
			const downloadLink = document.createElement('a');
			document.body.appendChild(downloadLink);
			downloadLink.href = res as string;
			downloadLink.target = '_blank';
			downloadLink.download = fileName;
			downloadLink.click();
			document.body.removeChild(downloadLink);
		});
	}
	if (typeof callback === 'function') {
		callback(attachmentId ?? 0);
	}
};
export const isValidDate = (dateString: string) => isNaN(Date.parse(dateString));

export const getLatestObject = (arr: any, fieldName: string) => {
	if (!arr) return null;
	const distantFuture = new Date(8640000000000000);
	const orderedArray = arr.sort((a: any, b: any) => {
		const dateA = a[fieldName] ? new Date(a[fieldName]) : distantFuture;
		const dateB = b[fieldName] ? new Date(b[fieldName]) : distantFuture;
		return dateA.getTime() - dateB.getTime();
	});
	return orderedArray[orderedArray.length - 1];
};
