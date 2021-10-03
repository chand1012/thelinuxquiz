import connectToDatabase from "./_connectToDatabase";

export default async (req, res) => {
  // Connect to database
  const db = await connectToDatabase();

  const collection = db.collection("stats");

  // get the average of all data points
  const average = await collection.aggregate([
    {
      $group: {
        _id: "$version",
        windows: { $avg: "$windows" },
        experience: { $avg: "$experience" },
        ux: { $avg: "$ux" },
        security: { $avg: "$security" },
        privacy: { $avg: "$privacy" },
        stability: { $avg: "$stability" },
        gaming: { $avg: "$gaming" },
        customize: { $avg: "$customize" },
        install: { $avg: "$install" },
        community: { $avg: "$community" },
      },
    },
  ]);

  // put _id into their respective object
  const averages = await average.toArray();
  const response = {
    home: averages[0]?._id === "home" ? averages[0] : averages[1],
    server: averages[0]?._id === "server" ? averages[0] : averages[1],
  };

  // return response
  res.status(200).json({
    ...response,
  });
};
