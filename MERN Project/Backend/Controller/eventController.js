const Events = require("../Model/eventSchema");

const EventForm = async (req, res) => {
    try {
        const { name, description, date } = req.body;

        const eventFormCreated = await Events.create({
            name,
            description,
            date:ISODate(date)
        });

        return res.status(201).json({
            success: "Event Added successfully",
            eventDetails: eventFormCreated
        });

    } catch (error) {
        console.error("Submission error:", error);
        return res.status(500).json({ error: "Internal server error" });
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
        console.error('Error fetching Services:', err);
        res.status(500).json({ message: 'Error fetching Services' });
    }
};

module.exports = { EventForm, DeleteEvent, GetEvent };
