
{/*
      TODO Submit title and body via the form. Ensure the following HTML attributes:
        - Form: data-type="notes-form"
        - Title input field: data-type="title"
        - Body input field: data-type="body"
*/}
import { useState } from 'react';

const Form = ({ onAddNote }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && body) {
      onAddNote({ title, body });
      setTitle('');
      setBody('')
    }
  };

  return (
    <form onSubmit={handleSubmit} data-type="notes-form">
      <div className="shadow sm:rounded-md sm:overflow-hidden">
        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Create new note
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Fill in the info and press "Save".
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type="text"
                  data-type="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-md sm:text-sm border-gray-300"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Body
            </label>
            <div className="mt-1">
              <textarea
                data-type="body"
                rows="3"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
