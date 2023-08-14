export default function UploadThumbnailPlaceholder() {
  return (
    <svg className="upload-thumbnail" width="200" height="120" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="120" fill="#eee" />
      <path
        d="M100 30 L130 60 L115 60 L115 90 L85 90 L85 60 L70 60 Z"
        fill="#bbb"
      />
      <text x="100" y="110" fill="#aaa" textAnchor="middle">
        Upload Thumbnail
      </text>
    </svg>
  );
}
