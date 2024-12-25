{/*
      TODO Substitute hardcoded data. Ensure the following HTML attributes:
        - data-type="note"
        - data-type="{note_title}"
        - data-body="{note_body}"
*/}
const Note = ({ title, body }) => (
  <div
    className="bg-white shadow overflow-hidden sm:rounded-lg"
    data-type="note"
    data-title={title}
    data-body={body}
  >
    <div className="px-4 py-5 sm:px-6">
      <h3 className="text-base leading-6 font-medium text-gray-900">{title}</h3>
    </div>
    <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
      <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <dd className="mt-1 text-sm text-gray-900">{body}</dd>
        </div>
      </dl>
    </div>
  </div>
);

export default Note;
