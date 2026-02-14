type Ride = {
  _id: string;
  from: string;
  to: string;
  fare: number;
  date: string;
  postedBy: string;
};

type Props = {
  rides: Ride[];
  onDelete: (id: string) => void;
};

export default function RidesTable({ rides, onDelete }: Props) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b text-gray-600">
            <th className="py-3">From</th>
            <th>To</th>
            <th>Date</th>
            <th>Fare</th>
            <th>Posted By</th>
            <th className="text-right">Action</th>
          </tr>
        </thead>

        <tbody>
          {rides.map((ride) => (
            <tr key={ride._id} className="border-b hover:bg-gray-50">
              <td className="py-3">{ride.from}</td>
              <td>{ride.to}</td>
              <td>{ride.date}</td>
              <td>₹{ride.fare}</td>
              <td>{ride.postedBy}</td>
              <td className="text-right">
                <button
                  onClick={() => {
                    if (confirm("Delete this ride?")) {
                      onDelete(ride._id);
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

      {rides.length === 0 && (
        <p className="text-gray-500 mt-4">No rides found.</p>
      )}
    </div>
  );
}
