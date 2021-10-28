//////////////
//dependencies
//////////////
const express = require("express");
const Item = require("../models/item.js");
///create router
const router = express.Router();
///////////////////
// router middlware
//////////////

///code goes here
//////

router.get("/seed", (req, res) => {
  const newItems = [
    {
      name: "Dorothee Biss Blend Knith heart cutout top",
      img:
        "https://i.pinimg.com/564x/e8/60/80/e860803feadd7177972354e865520529.jpg",
      type: "top",
      description: "Heart cutout knit top",
      price: 389,
      url:
        "https://www.1stdibs.com/fashion/clothing/shirts/1990s-dorothee-bis-wool-blend-knit-heart-cutout-top/id-v_3752833/",
      datePosted: { type: Date, default: Date.now },
    },
    {
      name: "Lapped Baby",
      img:
        "https://i.pinimg.com/564x/29/27/99/292799e812ba02de2448b3100d7017d1.jpg",
      type: "TOP",
      description: "Lapped Baby spray paint-effect T-shirt",
      price: 300,
      url:
        "https://www.farfetch.com/shopping/women/eckhaus-latta-lapped-baby-spray-paint-effect-t-shirt-item-15295330.aspx?fsb=1&size=20&storeid=9359&clickref=1100liwsKjhB&utm_source=laurenlyst&utm_medium=affiliate&utm_campaign=PHUS&utm_term=USNetwork&pid=performancehorizon_int&c=laurenlyst&clickid=1100liwsKjhB&af_siteid=1011l2075&af_sub_siteid=1011l270&af_cost_model=CPA&af_channel=affiliate&is_retargeting=true",
      datePosted: { type: Date, default: Date.now },
    },
    {
      name: "Aleksandre Akhalkatsishvili Leather Pants",
      img:
        "https://i.pinimg.com/564x/55/0d/07/550d07578b289d8f191d060a470e7dc4.jpg",
      type: "Pants",
      description: "V-Waist Faux Leather Pants",
      price: 556,
      url:
        "https://theurge.com.au/product/orange-aleksandre-akhalkatsishvili-v-waist-faux-leather-pants-791646-mo",
      datePosted: { type: "Date", default: Date.now },
    },
  ];
  Item.deleteMany({}).then((data) => {
    Item.create(newItems).then((data) => {
      res.json(data);
    });
  });
});

//////
//routes
//index
router.get("/", (req, res) => {
  Item.find({})
    .then((items) => {
      res.render("item/index.liquid", { items });
    })
    .catch((error) => {
      res.json({ error });
    });
});
//NEW ROUTE
router.get("/new", (req, res) => {
  res.render("item/new.liquid");
});
//create route
router.post("/", (req, res) => {
  Item.create(req.body)
    .then((item) => {
      res.redirect("/entry");
    })
    .catch((error) => {
      res.json({ error });
    });
});
//edit route
router.get("/:id/edit", (req, res) => {
  const id = req.params.id;
  Item.findById(id)
    .then((item) => {
      res.render("item/edit.liquid", { item });
    })
    .catch((error) => {
      res.json({ error });
    });
});
///update route
router.put("/:id", (req, res) => {
  const id = req.params.id;
  Item.findByIdAndUpdate(id, req.body, { new: true })
    .then((item) => {
      res.redirect(`/entry/${id}`);
    })
    .catch((error) => {
      res.json({ error });
    });
});
//delete route
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Item.findByIdAndRemove(id)
    .then((item) => {
      res.redirect("/entry");
    })
    .catch((error) => {
      res.json({ error });
    });
});
//index route
router.get("/:id", (req, res) => {
  const id = req.params.id;
  Item.findById(id)
    .then((item) => {
      res.render("item/show.liquid", { item });
    })
    .catch((error) => {
      res.json({ error });
    });
});
module.exports = router;
