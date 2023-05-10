module.exports = {
  handleCreate: (err, results, res) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        sucess: 0,
        message: "Database connection error",
      });
    }
    return res.status(200).json({
      sucess: 1,
      data: results,
    });
  },
  handleGetAll: (err, results, res) => {
    if (err) {
      console.log(err);
      return;
    }
    return res.status(200).json({
      success: 1,
      data: results,
    });
  },
  handleGetById: (err, results, res) => {
    if (err) {
      return;
    }
    if (!results) {
      return res.status(404).json({
        success: 0,
        message: "Entry not found",
      });
    }
    return res.status(200).json({
      success: 1,
      data: results,
    });
  },
  handleUpdate: (err, results, res) => {
    if (err) {
      console.log(err);
      return;
    }
    return res.status(200).json({
      success: 1,
      message: "Updated successfully",
    });
  },
  handleDelete: (err, results, res) => {
    console.log(results);
    if (err) {
      console.log(err);
      return;
    }
    if (!results) {
      return res.status(404).json({
        success: 0,
        message: "Entry Not Found",
      });
    }
    return res.status(200).json({
      success: 1,
      message: "Entry deleted successfully",
    });
  },
  handleGetAllTest: (err, results, res) => {
    if (err) {
      console.log(err);
      return;
    }
    res.render("userList", { data: results }, (renderErr, renderedHtml) => {
      if (renderErr) {
        console.log(renderErr);
        return res.status(500).send('Error rendering template');
      }
      console.log(results);
      return res.status(200).send(renderedHtml);
    });
  },
};
