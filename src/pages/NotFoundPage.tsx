import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { PageLayout } from "../components/layout/PageLayout";
import { Container } from "../components/ui/Container";
import { usePage } from "../hooks/usePage";
import { profile } from "../content/profile";
export default function NotFoundPage() {
  usePage(`Page not found — ${profile.name}`);
  return (
    <PageLayout>
      <Container className="not-found">
        <span className="error-code">404</span>
        <h1>A path yet to be built.</h1>
        <p>This page doesn’t exist. There’s still plenty to explore.</p>
        <Link to="/" className="button button-primary">
          <ArrowLeft size={18} />
          Back to home
        </Link>
      </Container>
    </PageLayout>
  );
}
