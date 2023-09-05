import React from "react";
import { observer } from "mobx-react";
import AddCodeForm from "./components/AddCodeForm";
import codeStore from "./CodeStore";
import { reorderList } from "./utils"; // Implement this function to reorder your list
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import CodeList from "./components/CodeList";

const App = () => {
  const handleAddCode = name => {
    const randomCode = Math.floor(Math.random() * 1000000);
    codeStore.addCode(name, randomCode);
  };

  const handleDragEnd = result => {
    if (!result.destination) {
      return;
    }

    const reorderedCodes = reorderList(
      codeStore.codes,
      result.source.index,
      result.destination.index
    );

    codeStore.reorderCodes(reorderedCodes);
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <div className='flex justify-between'>
            <Link to={"/addcode"} className='text-blue-300 text-3xl'>
              +
            </Link>
            <h1 className='text-2xl font-semibold mb-4'>2FA Codes</h1>
          </div>
          <CodeList codes={codeStore.codes} onDragEnded={handleDragEnd} />
        </div>
      ),
    },
    {
      path: "/addcode",
      element: <AddCodeForm onAddCode={handleAddCode} />,
    },
  ]);

  return (
    <div className='app max-w-lg mx-auto p-6'>
      <RouterProvider router={router} />
    </div>
  );
};

export default observer(App);
