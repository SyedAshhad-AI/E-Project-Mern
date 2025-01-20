const { default: mongoose } = require("mongoose");
const Events = require("../Model/eventSchema");
const User = require("../Model/userSchema");

const EventForm = async (req, res) => {
  try {
    const { name, description, date, createdBy } = req.body;

    // Convert the date string to a JavaScript Date object
    const eventDate = new Date(date);

    const eventFormCreated = await Events.create({
      name,
      description,
      date: eventDate,
      createdBy,
    });

    return res.status(201).json({
      success: "Event added successfully",
      eventDetails: eventFormCreated,
    });
  } catch (error) {
    console.error("Submission error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const UpdateEvent = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const result = await Events.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!result) {
      return res.status(404).json({ message: "event not found" });
    }

    res
      .status(200)
      .json({ message: "event updated successfully", updatedEvent: result });
  } catch (error) {
    console.error("Error updating event:", error);
    res
      .status(500)
      .json({ message: "Failed to update event", error: error.message });
  }
};

const DeleteEvent = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Events.findByIdAndDelete(id); // Use the correct model name
    if (!result) {
      return res.status(404).json({ message: "Event not found" });
    }
    res
      .status(200)
      .json({ message: "Event deleted successfully", deletedServices: result });
  } catch (error) {
    console.error("Error deleting Services:", error);
    res
      .status(500)
      .json({ message: "Failed to delete Services", error: error.message });
  }
};

const GetEvent = async (req, res) => {
  try {
    const events = await Events.find();
    res.status(200).json(events);
  } catch (err) {
    console.error("Error fetching Services:", err);
    res.status(500).json({ message: "Error fetching Services" });
  }
};

const UpdateStatus = async (req, res) => {
  const { id } = req.params;
  const { isApproved, isAvailable } = req.body;

  try {
    const event = await Events.findByIdAndUpdate(
      id,
      { isApproved, isAvailable },
      { new: true, runValidators: true }
    );

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.json(event);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const GetEventById = async (req, res) => {
  const { id } = req.params;

  // Split the ID string into an array (if it's multiple IDs)
  const ids = id.split(",").map((id) => new mongoose.Types.ObjectId(id.trim())); // Convert each ID to an ObjectId

  try {
    // Check if the `ids` array has more than one ID, and find all events that match
    const events = await Events.find({ _id: { $in: ids } });

    if (events.length > 0) {
      res.json(events); // Send the events as a JSON response
    } else {
      res.status(404).send("Events not found"); // Handle case where no events are found
    }
  } catch (err) {
    console.error("Error fetching event(s):", err);
    res.status(500).send("Internal Server Error"); // Send an error response
  }
};

const AddEventToUser = async (req, res) => {
  const { userId, eventId } = req.body;

  try {
    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the event ID already exists in the eventIds array
    if (!user.eventIds.includes(eventId)) {
      // Add the new event ID to the array
      user.eventIds.push(eventId);

      // Save the updated user document
      await user.save();

      return res
        .status(200)
        .json({ message: "Event ID added successfully", user });
    } else {
      return res.status(400).json({ message: "Event ID already exists" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error adding event ID", error: error.message });
  }
};

module.exports = {
  EventForm,
  DeleteEvent,
  GetEvent,
  UpdateEvent,
  GetEventById,
  UpdateStatus,
  AddEventToUser,
};
