export const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/30">
    <div className="flex flex-col items-center gap-4">
      <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
      <p className="text-sm text-muted-foreground">Carregando conteúdo...</p>
    </div>
  </div>
);

export const SectionLoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-6 h-6 border-3 border-primary/20 border-t-primary rounded-full animate-spin" />
  </div>
);
