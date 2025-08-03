export default function Contact() {
    return (
      <div className="flex flex-col lg:flex-row gap-8 p-4">
        <div className="lg:w-1/4">
          <ul className="space-y-2">
            <li className="bg-grey-800 p-2 rounded">Address:- India </li>
            <li className="bg-grey-800 p-2 rounded">Email :- mishrahimanshu559@gmail.com</li>
            <li className="bg-grey-800 p-2 rounded">Phone :-8369993254</li>
          </ul>
        </div>
        <div className="lg:flex-1">
          <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
          <p>Feel free to reach out anytime via email or phone.</p>
        </div>
      </div>
    );
  }
  