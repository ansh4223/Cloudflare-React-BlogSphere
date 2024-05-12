import { Link } from "react-router-dom";
export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
          <div className="text-3xl font-extrabold">Create an account</div>
          <div className="text-slate-400">
            Already have an account?
            <Link className="pl-2 underline" to={"/sigin"}>Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};


function LabelledInput({ label, placeholder, onChange}){
    return <div>
        <label for="first_Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
        <input type="text" id="first_name" class="bg-gray" />
    </div>
}