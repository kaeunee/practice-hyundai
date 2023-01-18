import { DataTypes } from "sequelize";
import sequelize from "../model/dataSource";

const location = sequelize.define(
  "location",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    latitude: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: "created_at",
    updatedAt: false,
  }
);

location.sync();

// 성수(1)
// location.create({
//   latitude: 37.542674744822776,
//   longitude: 127.0519009316346,
// });
// location.create({
//   latitude: 37.54550395124826,
//   longitude: 127.05174447137539,
// });
// location.create({
//   latitude: 37.542835866772265,
//   longitude: 127.05425465235088,
// });
// location.create({
//   latitude: 37.56111302428092,
//   longitude: 126.9863276230926,
// });
// location.create({
//   latitude: 37.54211412484111,
//   longitude: 127.05626825609606,
// });
// location.create({
//   latitude: 37.5479719927592,
//   longitude: 127.05330781357836,
// });
// location.create({
//   latitude: 37.54514158917043,
//   longitude: 127.05604421596856,
// });
// location.create({
//   latitude: 37.54670820862093,
//   longitude: 127.05835385548787,
// });
// location.create({
//   latitude: 37.545322530191704,
//   longitude: 127.05446013890148,
// });
// location.create({
//   latitude: 37.54656042339238,
//   longitude: 127.06527912648087,
// });

// 청담(2)
// location.create({
//   latitude: 37.5212305382852,
//   longitude: 127.05275711080392,
// });
// location.create({
//   latitude: 37.51752182989054,
//   longitude: 127.05006516573617,
// });
// location.create({
//   latitude: 37.518990636678495,
//   longitude: 127.04965892130686,
// });
// location.create({
//   latitude: 37.52428123616841,
//   longitude: 127.03910492017272,
// });
// location.create({
//   latitude: 37.523738503202026,
//   longitude: 127.0556492315183,
// });
// location.create({
//   latitude: 37.523044547035276,
//   longitude: 127.05603899519645,
// });
// location.create({
//   latitude: 37.52317950342778,
//   longitude: 127.05644634464443,
// });
// location.create({
//   latitude: 37.524371321396835,
//   longitude: 127.03915021775015,
// });
// location.create({
//   latitude: 37.524227191009736,
//   longitude: 127.03905964149381,
// });
// location.create({
//   latitude: 37.52469690805956,
//   longitude: 127.03525882306596,
// });

// 선릉(3)
// location.create({
//   latitude: 37.50387448461838,
//   longitude: 127.0485829829549,
// });
// location.create({
//   latitude: 37.50602024154566,
//   longitude: 127.05569828103978,
// });
// location.create({
//   latitude: 37.50471964187954,
//   longitude: 127.0527511450627,
// });
// location.create({
//   latitude: 37.50377876347851,
//   longitude: 127.05122369640902,
// });
// location.create({
//   latitude: 37.50358950820567,
//   longitude: 127.05132535263095,
// });
// location.create({
//   latitude: 37.503865627469565,
//   longitude: 127.04820976225922,
// });
// location.create({
//   latitude: 37.50650503889692,
//   longitude: 127.04950079294879,
// });
// location.create({
//   latitude: 37.50755680411635,
//   longitude: 127.05495295602071,
// });
// location.create({
//   latitude: 37.503887997370704,
//   longitude: 127.0485886464847,
// });
// location.create({
//   latitude: 37.50334737327816,
//   longitude: 127.048639188729,
// });

export default {
  async find(req, res) {
    const positions = await location.findAll({
      attributes: ["latitude", "longitude"],
    }); //SELECT * FROM location;
    res.status(200).json({ positions });
  },
};

//NUXT.js, node.js, sequelize(DB)
