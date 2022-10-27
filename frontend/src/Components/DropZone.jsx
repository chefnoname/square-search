import classNames from 'classnames';
import React, { useState, useEffect, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '40px 20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out',
};

const focusedStyle = {
  borderColor: '#2196f3',
};

const acceptStyle = {
  borderColor: '#00e676',
};

const rejectStyle = {
  borderColor: '#ff1744',
};

function Dropzone(props) {
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({ maxFiles: 1 });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject],
  );

  const files = acceptedFiles.map((file) => (
    <div key={file.path}>
      <span>
        {file.path} - {file.size} bytes
      </span>
    </div>
  ));

  const disabled = !acceptedFiles || acceptedFiles.length === 0;

  return (
    <div className="container">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p>Drag and drop, or click to select files</p>
        <em>(1 file is the maximum number of files you can drop here)</em>
      </div>
      <aside className="mt-1" style={{ height: '2rem' }}>
        {files}
      </aside>
      <button
        disabled={disabled}
        className={classNames('mt-2 btn', {
          'btn-info': !disabled,
          'btn-secondary': disabled,
        })}
      >
        Submit
      </button>
    </div>
  );
}

export default Dropzone;
