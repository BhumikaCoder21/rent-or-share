type Rental = {
  _id: string;
  title: string;
  price: number;
  location: string;
  owner: string;
};

type Props = {
  rentals: Rental[];
  onDelete: (id: string) => void;
};

export default function RentalsTable({ rentals, onDelete }: Props) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b text-gray-600">
            <th className="py-3">Title</th>
            <th>Location</th>
            <th>Price</th>
            <th>Owner</th>
            <th className="text-right">Action</th>
          </tr>
        </thead>

        <tbody>
          {rentals.map((rental) => (
            <tr key={rental._id} className="border-b hover:bg-gray-50">
              <td className="py-3">{rental.title}</td>
              <td>{rental.location}</td>
              <td>₹{rental.price}</td>
              <td>{rental.owner}</td>
              <td className="text-right">
                <button
                  onClick={() => {
                    if (confirm("Delete this rental?")) {
                      onDelete(rental._id);
                    }
                  }}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {rentals.length === 0 && (
        <p className="text-gray-500 mt-4">No rentals found.</p>
      )}
    </div>
  );
}
