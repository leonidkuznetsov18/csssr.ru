export default (accept) => {
	switch (accept) {
	case '.zip':
		return '(упакованный в ZIP)';
	case '.docx':
		return '(в формате DOCX)';
	case '.xlsx':
		return '(в формате XLSX)';
	case '.sketch':
		return '(в формате Sketch)';
	case '.jpg':
		return '(в формате JPG)';
	default:
		return '';
	}
};
