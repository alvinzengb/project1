import React, { useState } from "react";
import { Layout, Input, Select, DatePicker, Button, Table, Modal } from "antd";
import { useTranslation } from "react-i18next";  // Import the hook for translations
import { Link } from "react-router-dom";
import bookingsData from "../bookingsData";

const { Content } = Layout;
const { Option } = Select;

const CaregiverBooking = () => {
  const { t } = useTranslation();  // Use the translation hook to get the t function

  const [filters, setFilters] = useState({
    name: "",
    location: "",
    service: "",
    date: "",
  });
  const [results, setResults] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const handleFilterChange = (name, value) => {
    console.log(name, value)
    setFilters({ ...filters, [name]: value });
  };

  const handleSearch = () => {
    const filteredResults = bookingsData.filter((booking) => {
      const matchesName = filters.name
        ? booking.name.toLowerCase().includes(filters.name.toLowerCase())
        : true;

      const matchesLocation = filters.location
        ? booking.location.toLowerCase().includes(filters.location.toLowerCase())
        : true;

      const matchesService = filters.service
        ? booking.service.toLowerCase().includes(filters.service.toLowerCase())
        : true;

      const matchesDate = filters.date ? booking.date === filters.date : true;

      return matchesName && matchesLocation && matchesService && matchesDate;
    });

    setResults(filteredResults);
  };

  const handleSelectCaregiver = (record) => {
    setSelectedBooking(record);
  };

  const handleConfirm = () => {
    Modal.success({
      title: t("booking_confirmed"),
      content: `${t("caregiver_confirmed")} ${selectedBooking?.name || t("anonymous")}.`,
    });
    setSelectedBooking(null);
  };

  const handleCancel = () => {
    setSelectedBooking(null);
  };

  const columns = [
    {
      title: t("name"),
      dataIndex: "name",
      key: "name",
    },
    {
      title: t("date"),
      dataIndex: "date",
      key: "date",
    },
    {
      title: t("location"),
      dataIndex: "location",
      key: "location",
    },
    {
      title: t("service"),
      dataIndex: "service",
      key: "service",
    },
    {
      title: t("action"),
      key: "action",
      render: (text, record) => (
        <Button type="primary" onClick={() => handleSelectCaregiver(record)}>
          {t("select")}
        </Button>
      ),
    },
  ];

  return (
    <Layout style={{ height: "100vh" }}>
      <Content style={{ padding: "20px", marginTop: "64px" }}>
        <h1>{t("caregiver_booking")}</h1>

        {/* Filters */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <Input
            placeholder={t("search_name")}
            value={filters.name}
            onChange={(e) => handleFilterChange("name", e.target.value)}
            style={{ width: "20%" }}
          />
          <Input
            placeholder={t("search_location")}
            value={filters.location}
            onChange={(e) => handleFilterChange("location", e.target.value)}
            style={{ width: "20%" }}
          />
          <Select
            placeholder={t("search_service")}
            value={filters.service}
            onChange={(value) => handleFilterChange("service", value)}
            style={{ width: "20%" }}
            allowClear
          >
            <Option value="Elderly Assistance">{t("elderly_assistance")}</Option>
            <Option value="Childcare">{t("childcare")}</Option>
            <Option value="Home Cleaning">{t("home_cleaning")}</Option>
            <Option value="Meal Preparation">{t("meal_preparation")}</Option>
            <Option value="Transportation Services">{t("transportation_services")}</Option>
          </Select>
          <DatePicker
            placeholder={t("select_date")}
            onChange={(date, dateString) => handleFilterChange("date", dateString)}
            style={{ width: "20%" }}
          />
          <Button type="primary" onClick={handleSearch}>
            {t("search")}
          </Button>
        </div>

        {/* Results Table */}
        <Table
          dataSource={results}
          columns={columns}
          rowKey="id"
          pagination={{ pageSize: 5 }}
        />

        {/* Confirmation Modal */}
        <Modal
          title={t("confirm_caregiver")}
          visible={!!selectedBooking}
          onOk={handleConfirm}
          onCancel={handleCancel}
        >
          {selectedBooking && (
            <div>
              <p>
                <strong>{t("caregiver_name")}:</strong> {selectedBooking.name || t("anonymous")}
              </p>
              <p>
                <strong>{t("date")}:</strong> {selectedBooking.date}
              </p>
              <p>
                <strong>{t("location")}:</strong> {selectedBooking.location}
              </p>
              <p>
                <strong>{t("service")}:</strong> {selectedBooking.service}
              </p>
            </div>
          )}
        </Modal>
      </Content>
    </Layout>
  );
};

export default CaregiverBooking;
