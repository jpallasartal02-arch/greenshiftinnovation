import { PageLayout } from "@/components/layout/PageLayout";

const AvisoLegal = () => {
  return (
    <PageLayout>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold text-foreground mb-6">Aviso Legal</h1>
          <div className="w-full h-[calc(100vh-200px)] rounded-lg overflow-hidden border border-border">
            <iframe
              src="/legal/aviso-legal.pdf"
              className="w-full h-full"
              title="Aviso Legal"
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AvisoLegal;
