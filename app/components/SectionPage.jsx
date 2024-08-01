import React, { useState } from "react";
import { Page, Card, Button, Select, Layout } from "@shopify/polaris";

export default function SectionPage() {
  const [integrationActive, setIntegrationActive] = useState(false);
  const [orderTractStatus, setOrderTrackStatus] = useState(false);
  const [sendProductImages, setSendProductImages] = useState(false);
  const [inventoryUpdates, setInventoryUpdates] = useState(false);
  const [defaultCarrier, setDefaultCarrier] = useState("");

  const carrierOptions = [
    { label: "Choose default carrier", value: "" },
    { label: "FedEx", value: "fedex" },
    { label: "UPS", value: "ups" },
    { label: "USPS", value: "usps" },
  ];

  const handleSave = () => {
    console.log("Settings saved", {
      integrationActive,
      sendProductImages,
      inventoryUpdates,
      defaultCarrier,
      orderTractStatus,
    });
  };
  const CustomToggle = ({ label, checked, onChange }) => (
    <div style={styles.toggleContainer}>
      <label style={styles.toggleLabel}>{label}</label>
      <div
        style={{
          ...styles.toggleSwitch,
          backgroundColor: checked ? "#000" : "#ccc",
        }}
        onClick={() => onChange(!checked)}
      >
        <div
          style={{
            ...styles.toggleKnob,
            transform: checked ? "translateX(24px)" : "translateX(0)",
          }}
        />
      </div>
    </div>
  );

  return (
    <Page>
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <div style={{ padding: "16px", backgroundColor: "#e0e0e0" }}>
              <CustomToggle
                label="Disable/Activate integration"
                checked={integrationActive}
                onChange={setIntegrationActive}
              />
              <CustomToggle
                label="Send Product images"
                checked={sendProductImages}
                onChange={setSendProductImages}
              />
              <CustomToggle
                label="Activate inventory updates"
                checked={inventoryUpdates}
                onChange={setInventoryUpdates}
              />
              <CustomToggle
                label=" Update Order status and Track & Trace automatically"
                checked={orderTractStatus}
                onChange={setOrderTrackStatus}
              />
              <Select
                options={carrierOptions}
                onChange={setDefaultCarrier}
                value={defaultCarrier}
                label=""
              />
            </div>
            <Button onClick={handleSave} fullWidth>
              Save
            </Button>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

const styles = {
  toggleContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "12px",
  },
  toggleLabel: {
    flex: 1,
    fontSize: "14px",
    marginRight: "10px",
  },
  toggleSwitch: {
    width: "44px",
    height: "20px",
    borderRadius: "20px",
    position: "relative",
    cursor: "pointer",
    transition: "background-color 1s",
    transition: "transform 1s ease-in-out",
  },
  toggleKnob: {
    width: "16px",
    height: "16px",
    backgroundColor: "#fff",
    borderRadius: "50%",
    position: "absolute",
    top: "2px",
    left: "2px",
    boxShadow: "0 0 2px rgba(0, 0, 0, 0.5)",
    transition: "transform 1s ease-in-out",
  },
};
