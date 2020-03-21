type FileTypeProps = string | undefined;

const fileTypeToMediaType = (fileType: FileTypeProps): FileTypeProps => {
  if (!fileType) {
    return;
  }

  if (fileType.match(/\b^image/)) {
    return 'image';
  }

  if (fileType.match(/\b^application/)) {
    return 'document';
  }

  return fileType;
};

export default fileTypeToMediaType;
