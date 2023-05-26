const Artist = require("../models/Artist");
const User = require("../models/User");

module.exports = {
  getArtistById: async (id) => {
    const artist = await Artist.findOne({
      where: { id: id },
      include: [{ model: User, as: 'User', attributes: ['id', 'name', 'email'] }], 
    });

    return artist;
  },

  getAllArtists: async () => {
    const artists = await Artist.findAll({
      include: [{ model: User, as: 'User', attributes: ['id', 'name', 'email'] }],
    });

    return artists;
  },

  createArtist: async (artistData, userId) => {
    const artist = await Artist.create(artistData);

    const user = await User.findOne({ where: { id: userId } });
    if (!user) throw new Error('User not found');

    await artist.setUser(user); 

    return artist;
  },

  updateArtist: async (id, updates) => {
    const artist = await Artist.findOne({ where: { id } });

    if (!artist) {
      throw new Error("Artist not found");
    }

    return await artist.update(updates);
  },

  deleteArtist: async (id) => {
    const artist = await Artist.findOne({ where: { id } });

    if (!artist) {
      throw new Error("Artist not found");
    }

    return await artist.destroy();
  },
};