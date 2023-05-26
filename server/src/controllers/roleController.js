const roleService = require("../services/roleService");

module.exports = {
  createRole: async (req, res) => {
    const role = await roleService.createRole(req.body.name);
    return res.status(201).json(role);
  },
  getAllRoles: async (req, res) => {
    const roles = await roleService.getAllRoles();
    return res.status(200).json(roles);
  },
  getRoleById: async (req, res) => {
    const role = await roleService.getRoleById(req.params.id);
    return res.status(200).json(role);
  },
  assignRoleToUser: async (req, res) => {
    const result = await roleService.assignRoleToUser(
      req.body.userId,
      req.body.roleId
    );
    return res.status(200).json(result);
  },
  unassignRoleFromUser: async (req, res) => {
    const result = await roleService.unassignRoleFromUser(
      req.body.userId,
      req.body.roleId
    );
    return res.status(200).json(result);
  },
};