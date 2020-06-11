import React, { useState } from "react";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  Typography,
  Radio,
} from "antd";

const { Title, Text } = Typography;
const layout = {
  labelCol: {
    span: 10,
  },
  wrapperCol: {
    span: 16,
  },
  layout: "horizontal",
  size: "small",
};

const isValidPesel = (pesel) => {
  if (!pesel) return false;
  pesel = pesel.toString();
  if (typeof pesel !== "string") return false;

  let weight = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
  let sum = 0;
  let controlNumber = parseInt(pesel.substring(10, 11));

  for (let i = 0; i < weight.length; i++) {
    sum += parseInt(pesel.substring(i, i + 1)) * weight[i];
  }
  sum = sum % 10;
  return (10 - sum) % 10 === controlNumber;
};

const validateMessages = {
  required: "${label} jest wymagane!",
};

const OrderForm = () => {
  const [formData, setFormData] = useState(null);

  const onFinish = (values) => {
    console.log(values);
    setFormData(values);
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Title level={3}>Panel tworzenia zlecenia lekowego dla pacjenta</Title>
      <Text>Informacje o leku</Text>
      <Form.Item
        label="Nazwa leku"
        name={["medicine", "name"]}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select>
          <Select.Option value="Avifavir">Avifavir</Select.Option>
          <Select.Option value="Abakawir">Abakawir</Select.Option>
          <Select.Option value="Abasaglar">Abasaglar</Select.Option>
          <Select.Option value="Abelcyt">Abelcyt</Select.Option>
          <Select.Option value="ABE">ABE</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Pora podania leku"
        name={["medicine", "hour-of-application"]}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Radio.Group>
          <Radio.Button value="8:00">8:00</Radio.Button>
          <Radio.Button value="15:00">15:00</Radio.Button>
          <Radio.Button value="22:00">22:00</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        label="Data podania leku"
        name={["medicine", "date-of-application"]}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <DatePicker placeholder="Wybierz datę"/>
      </Form.Item>
      <Form.Item
        label="Ilość leku"
        name={["medicine", "quantity"]}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        name={["medicine", "hospital-section"]}
        label="Oddział na jaki ma trafić lek"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select>
          <Select.Option value="oddział A">oddział A</Select.Option>
          <Select.Option value="oddział B">oddział B</Select.Option>
          <Select.Option value="oddział C">oddział C</Select.Option>
        </Select>
      </Form.Item>
      <Text>Dane pacjenta</Text>
      <Form.Item
        name={["pacient", "name"]}
        label="Imię"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["pacient", "surname"]}
        label="Nazwisko"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["pacient", "pesel"]}
        label="PESEL"
        rules={[
          {
            required: true,
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (isValidPesel(getFieldValue(["pacient", "pesel"]))) {
                return Promise.resolve();
              }
              return Promise.reject("Nie poprawny PESEL!");
            },
          }),
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item style={{ float: "right" }}>
        <Button type="primary" htmlType="submit">
          Wyślij
        </Button>
      </Form.Item>
      {formData &&
      (
        <Text>
          Wysłano zlecenie dla pacjenta: {formData.pacient.name}{" "}
          {formData.pacient.surname}
        </Text>
      )}
    </Form>
  );
};

export default OrderForm;
