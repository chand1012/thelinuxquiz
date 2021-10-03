import connectToDatabase from "./_connectToDatabase";
import hashing from "./_hashing";

// const exampleStructure = {
//   hashIP: "",
//   version: "home", // or server
//   data: {
//     // insert quiz data here
//   },
// };

export default async (req, res) => {
  // get ip from request
  const hashIP = hashing.hash(
    req.headers["x-forwarded-for"] || req.connection.remoteAddress
  );

  // if the body is undefined, return error
  if (req.body === undefined) {
    res.status(400).json({
      error: "No data sent",
    });
    return;
  }

  // get data and version from request body
  const { version, data } = req.body;

  // if undefined
  if (version === undefined || data === undefined) {
    res.status(400).json({
      error: "version and data are required",
    });
    return;
  }

  // Connect to database
  const db = await connectToDatabase();

  const collection = db.collection("stats");

  const options = { upsert: true };

  const filter = {
    hashIP,
    version,
  };

  const update = {
    $set: {
      hashIP,
      version,
      data,
    },
  };

  const response = collection.updateOne(filter, update, options);

  res.status(200).json({
    message: "success",
    response,
  });
};
