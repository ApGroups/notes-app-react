// import Note from "./Note";

// {/*
//       TODO Substitute hardcoded data. Use the note data submitted via the form.
// */}
import Note from "./Note";

const List = ({ notes }) => (
  <div>
    <div className="pb-5 border-b border-gray-200">
      <h3 className="text-lg leading-6 font-medium text-gray-900">Saved Notes</h3>
    </div>
    <ul className="divide-y divide-gray-200">
      {notes.map((note, index) => (
        <li key={index} className="py-4">
          <Note title={note.title} body={note.body} />
        </li>
      ))}
    </ul>
  </div>
);

export default List;
