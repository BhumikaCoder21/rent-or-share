"use client";

type Props = {
  title: string;
  description: string;
  buttonText: string;
  type: "ride" | "scooty";
  onClick?: () => void; 
};

export default function ActionCard({
  title,
  description,
  buttonText,
  onClick,
}: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition transform hover:-translate-y-1 flex flex-col items-start h-full">
      <div className="flex-1">
        <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
        <p className="mt-3 text-gray-600 leading-relaxed">{description}</p>
      </div>

      <button
        onClick={onClick} 
        className="mt-6 px-6 py-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition font-medium"
      >
        {buttonText}
      </button>
    </div>
  );
}
