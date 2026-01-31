"use client";

type Props = {
  title: string;
  description: string;
  buttonText: string;
  type: "ride" | "scooty";
};

export default function ActionCard({ title, description, buttonText }: Props) {
  const handleClick = () => {
    // later:
    // if (!user) open auth modal
    // else redirect to form
    console.log("clicked");
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-1">
      <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>

      <p className="mt-3 text-gray-600">{description}</p>

      <button
        onClick={handleClick}
        className="mt-6 px-6 py-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition"
      >
        {buttonText}
      </button>
    </div>
  );
}
