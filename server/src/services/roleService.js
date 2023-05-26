const Role = require("../models/Role");
const User = require("../models/User");

module.exports = {
  createRole: async (roleName) => {
    const role = await Role.create({ name: roleName });
    return role;
  },
  getAllRoles: async () => {
    return await Role.findAll();
  },
  getRoleById: async (roleId) => {
    return await Role.findOne({ where: { id: roleId } });
  },
  assignRoleToUser: async (userId, roleId) => {
    const user = await User.findOne({ where: { id: userId } });
    const role = await Role.findOne({ where: { id: roleId } });

    if (user && role) {
      await user.addRole(role);
      return { success: true, message: "Role assigned successfully" };
    } else {
      throw new Error("User or Role does not exist");
    }
  },
  unassignRoleFromUser: async (userId, roleId) => {
    const user = await User.findOne({ where: { id: userId } });
    const role = await Role.findOne({ where: { id: roleId } });

    if (user && role) {
      await user.removeRole(role);
      return { success: true, message: "Role unassigned successfully" };
    } else {
      throw new Error("User or Role does not exist");
    }
  },
};
