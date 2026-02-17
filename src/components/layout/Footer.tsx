export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} Booking Management System</p>
    </footer>
  );
}

const styles = {
  footer: {
    padding: "1rem",
    textAlign: "center" as const,
    borderTop: "1px solid #ddd",
    marginTop: "2rem",
  },
};
