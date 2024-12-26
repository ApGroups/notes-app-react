import { useState } from 'react';
import Head from 'next/head';
import Footer from "../components/Footer";
import List from "../components/List";
import Form from "../components/Form";

export default function Home() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  return (
    <div>
      <Head>
        <title>Notes App React</title>
      </Head>
      <div className="flex-row justify-around">
        <main>
          <div className="mt-20 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto content-center">
              <div className="grid grid-cols-3 gap-6">
                <div className="mt-0 col-span-1">
                  <Form onAddNote={addNote} />
                </div>
                <div className="col-span-2">
                  <List notes={notes} />
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}