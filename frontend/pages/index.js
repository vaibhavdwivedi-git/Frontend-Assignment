import Head from "next/head";
import styles from "@/styles/Home.module.css";
import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";
import Form from "@/components/form";

export default function Home() {
  const placeholder = [
    {
      sort: 1,
      label: "Pizza Name",
      description: "",
      validate: {
        required: true,
        immutable: false,
      },
      jsonKey: "name",
      uiType: "Input",
      icon: "",
      level: 0,
      placeholder: "",
    },
    {
      sort: 4,
      label: "Pizza_type",
      description: "",
      validate: {
        required: true,
        immutable: false,
      },
      jsonKey: "pizza_type",
      uiType: "Group",
      icon: "",
      level: 0,
      placeholder: "",
      subParameters: [
        {
          sort: 0,
          label: "Pizza_type Type",
          description: "",
          validate: {
            required: true,
            options: [
              {
                label: "Naples Style Pizza",
                value: "naples",
                description: "",
                icon: "",
              },
              {
                label: "New York Style Pizza",
                value: "newyork",
                description: "",
                icon: "",
              },
            ],
            defaultValue: "naples",
            immutable: false,
          },
          jsonKey: "type",
          uiType: "Radio",
          icon: "",
          level: 1,
          placeholder: "",
        },
        {
          sort: 10001,
          label: "Naples Style Pizza",
          description: "",
          validate: {
            required: true,
            immutable: false,
          },
          jsonKey: "Naples",
          uiType: "Ignore",
          icon: "",
          level: 1,
          placeholder: "",
          conditions: [
            {
              jsonKey: "pizza_type.type",
              op: "==",
              value: "naples",
              action: "enable",
            },
          ],
          subParameters: [
            {
              sort: 10000,
              label: "Slices",
              description: "",
              validate: {
                required: true,
                options: [
                  {
                    label: "1",
                    value: "1",
                    description: "",
                    icon: "",
                  },
                  {
                    label: "2",
                    value: "2",
                    description: "",
                    icon: "",
                  },
                  {
                    label: "3",
                    value: "3",
                    description: "",
                    icon: "",
                  },
                  {
                    label: "4",
                    value: "4",
                    description: "",
                    icon: "",
                  },
                  {
                    label: "5",
                    value: "5",
                    description: "",
                    icon: "",
                  },
                ],
                defaultValue: "1",
                immutable: false,
              },
              jsonKey: "slices",
              uiType: "Select",
              icon: "",
              level: 2,
              placeholder: "",
            },
            {
              sort: 10001,
              label: "Type",
              description: "",
              validate: {
                required: true,
                pattern: "naples",
                immutable: false,
              },
              jsonKey: "type",
              uiType: "Input",
              icon: "",
              level: 2,
              placeholder: "",
              disable: true,
            },
          ],
        },
        {
          sort: 10002,
          label: "New York Style Pizza",
          description: "",
          validate: {
            required: true,
            immutable: false,
          },
          jsonKey: "NewYork",
          uiType: "Ignore",
          icon: "",
          level: 1,
          placeholder: "",
          conditions: [
            {
              jsonKey: "pizza_type.type",
              op: "==",
              value: "newyork",
              action: "enable",
            },
          ],
          subParameters: [
            {
              sort: 10000,
              label: "Cheeseburst",
              description: "",
              validate: {
                required: true,
                defaultValue: false,
                immutable: false,
              },
              jsonKey: "cheeseburst",
              uiType: "Switch",
              icon: "",
              level: 2,
              placeholder: "",
            },
            {
              sort: 10001,
              label: "Type",
              description: "",
              validate: {
                required: true,
                pattern: "newyork",
                immutable: false,
              },
              jsonKey: "type",
              uiType: "Input",
              icon: "",
              level: 2,
              placeholder: "",
              disable: true,
            },
          ],
        },
      ],
    },
    {
      sort: 10002,
      label: "Toppings",
      description: "",
      validate: {
        required: true,
        immutable: false,
      },
      jsonKey: "toppings",
      uiType: "Group",
      icon: "",
      level: 0,
      placeholder: "",
      subParameters: [
        {
          sort: 1,
          label: "Sauce",
          description: "",
          validate: {
            required: true,
            options: [
              {
                label: "Red",
                value: "Red",
                description: "",
                icon: "",
              },
              {
                label: "White",
                value: "White",
                description: "",
                icon: "",
              },
              {
                label: "Pesto",
                value: "Pesto",
                description: "",
                icon: "",
              },
            ],
            defaultValue: "Red",
            immutable: false,
          },
          jsonKey: "sauce",
          uiType: "Select",
          icon: "",
          level: 1,
          placeholder: "",
        },
        {
          sort: 3,
          label: "Main_topping",
          description: "",
          validate: {
            required: true,
            options: [
              {
                label: "Mushroom",
                value: "Mushroom",
                description: "",
                icon: "",
              },
              {
                label: "Chicken",
                value: "Chicken",
                description: "",
                icon: "",
              },
              {
                label: "Jalapenos",
                value: "Jalapenos",
                description: "",
                icon: "",
              },
            ],
            defaultValue: "Mushroom",
            immutable: false,
          },
          jsonKey: "main_topping",
          uiType: "Select",
          icon: "",
          level: 1,
          placeholder: "",
        },
        {
          sort: 6,
          label: "Include_seasonings",
          description: "",
          validate: {
            required: true,
            defaultValue: true,
            immutable: false,
          },
          jsonKey: "include_seasonings",
          uiType: "Switch",
          icon: "",
          level: 1,
          placeholder: "",
        },
        {
          sort: 6,
          label: "Second_topping",
          description: "",
          validate: {
            options: [
              {
                label: "Anchovies",
                value: "Anchovies",
                description: "",
                icon: "",
              },
              {
                label: "Pineapple",
                value: "Pineapple",
                description: "",
                icon: "",
              },
              {
                label: "Potatoes",
                value: "Potatoes",
                description: "",
                icon: "",
              },
            ],
            defaultValue: "Anchovies",
            immutable: false,
          },
          jsonKey: "second_topping",
          uiType: "Select",
          icon: "",
          level: 1,
          placeholder: "",
        },
      ],
    },
    {
      sort: 10003,
      label: "Size",
      description: "",
      validate: {
        options: [
          {
            label: "Medium",
            value: "Medium",
            description: "",
            icon: "",
          },
          {
            label: "Small",
            value: "Small",
            description: "",
            icon: "",
          },
          {
            label: "Large",
            value: "Large",
            description: "",
            icon: "",
          },
        ],
        defaultValue: "Medium",
        immutable: false,
      },
      jsonKey: "size",
      uiType: "Select",
      icon: "",
      level: 0,
      placeholder: "",
    },
  ];

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.section1}>
          <div className={styles.head}>Edit UI Schema</div>
          <JSONInput
            id="a_unique_id"
            locale={locale}
            placeholder={placeholder}
            height="550px"
            width="100%"
            colors={{ background: "#2B1254", keys: "#A8519E" }}
            confirmGood={false}
            style={{
              labels: {
                fontSize: "14px",
                fontWeight: 600,
              },
              contentBox: {
                fontSize: "14px",
                fontWeight: 300,
              },
            }}
          />

          <button className={styles.button}>Generate Form</button>
        </div>

        <div className={styles.section2}>
          <div className={styles.head}>Rendered Form</div>
          <Form />
        </div>
      </main>
    </>
  );
}
