import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: { flexDirection: "column", padding: 20 },
  section: { margin: 10, padding: 10, border: "1px solid #ccc" },
});

// Create Document
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Hello, this is a PDF in Next.js!</Text>
      </View>
      <View style={styles.section}>
        <Text>Generated with @react-pdf/renderer</Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
