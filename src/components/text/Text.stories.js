import React from "react";
import { storiesOf } from "@storybook/react";
import { Text } from "./Text";
import { ON_BACKGROUND } from "../../constants/theme";

storiesOf("Text", module)
  .add("default", () => (
    <Text color={ON_BACKGROUND}>
      This is a sentence that's not to long, but not to short.
    </Text>
  ))
  .add("short", () => <Text color={ON_BACKGROUND}>Word</Text>)
  .add("long", () => (
    <Text color={ON_BACKGROUND}>
      Lorem ipsum dolor amet in put a bird on it 90's unicorn kogi beard
      mumblecore cliche viral. Succulents quis raw denim pork belly kombucha.
      Vegan meh art party, nisi fixie chambray vice fingerstache forage
      church-key cronut wayfarers. Reprehenderit drinking vinegar fashion axe
      tempor 8-bit, fingerstache listicle intelligentsia brooklyn locavore
      microdosing whatever man bun. Wayfarers austin next level nisi
      letterpress. Excepteur intelligentsia ennui, irony paleo man braid vice.
      Cillum viral hot chicken vaporware est distillery pok pok nulla twee
      exercitation food truck plaid poutine mumblecore. Offal jean shorts pug
      distillery, unicorn listicle succulents adaptogen banjo aliqua brooklyn
      green juice culpa palo santo. Minim irony hell of id echo park. Cliche
      pour-over proident meggings labore four loko selvage, DIY raclette
      cold-pressed pariatur. Adipisicing occupy ennui cred. Listicle air plant
      +1 swag, ugh shabby chic live-edge franzen ennui laboris in pariatur
      pop-up authentic YOLO. Intelligentsia poutine tote bag pok pok, hella VHS
      nulla kinfolk. Migas retro enamel pin taxidermy pariatur single-origin
      coffee meggings deserunt church-key dolore. Four loko gluten-free veniam
      vaporware williamsburg, jean shorts literally tousled raclette sriracha.
      Next level fixie cardigan man braid dreamcatcher chillwave bicycle rights.
      Unicorn raclette ut direct trade. Cray magna cold-pressed, do
      single-origin coffee 90's nostrud twee duis pickled culpa.
    </Text>
  ));
