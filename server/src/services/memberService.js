const TeamMember = require('../models/TeamMember');

module.exports = {
  async getAllMembers() {
    return await TeamMember.findAll();
  },

  async getMemberById(id) {
    return await TeamMember.findByPk(id);
  },

  async createMember(memberData) {
    return await TeamMember.create(memberData);
  },

  async updateMember(id, memberData) {
    return await TeamMember.update(memberData, { where: { id } });
  },

  async deleteMember(id) {
    return await TeamMember.destroy({ where: { id } });
  },
};
