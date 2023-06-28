export default function Home() {
  return (
    <div>
      <h1 className="text-3xl bold pb-10">BookShare!</h1>
      <h2 className="italic pb-5">Help build the Forver Library</h2>
      <p>Choose files to upload:</p>
      <input id="fileUpload" type="file" />
      {/* ugly, but hard to style! https://medium.com/web-dev-survey-from-kyoto/how-to-customize-the-file-upload-button-in-react-b3866a5973d8 */}
    </div>
  );
}
