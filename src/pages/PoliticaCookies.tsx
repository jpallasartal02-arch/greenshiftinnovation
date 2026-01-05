import { PageLayout } from "@/components/layout/PageLayout";

const PoliticaCookies = () => {
  return (
    <PageLayout>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold text-foreground mb-6">Política de Cookies</h1>
          <div className="w-full h-[calc(100vh-200px)] rounded-lg overflow-hidden border border-border">
            <iframe
              src="/legal/politica-cookies.pdf"
              className="w-full h-full"
              title="Política de Cookies"
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default PoliticaCookies;
