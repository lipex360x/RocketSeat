import React from 'react';

import { Container, FileInfo } from './styles';

interface FileProps {
  name: string;
  fileSize: string;
}

interface FileListProps {
  files: FileProps[];
}

const FileList: React.FC<FileListProps> = ({ files }: FileListProps) => {
  return (
    <Container>
      {files.map((uploadedFile) => (
        <li key={uploadedFile.name}>
          <FileInfo>
            <div>
              <strong>{uploadedFile.name}</strong>
              <span>{uploadedFile.fileSize}</span>
            </div>
          </FileInfo>
        </li>
      ))}
    </Container>
  );
};

export default FileList;
