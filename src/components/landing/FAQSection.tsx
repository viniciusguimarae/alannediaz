import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  { q: 'É sigiloso? Vai aparecer na fatura?', a: 'Sim, é totalmente sigiloso. Na fatura aparecerá apenas um nome genérico, sem qualquer referência ao conteúdo.' },
  { q: 'Quando tenho acesso depois do pagamento?', a: 'O acesso é liberado imediatamente após a confirmação do pagamento. Você já pode começar a curtir todo o conteúdo.' },
  { q: 'Posso cancelar quando quiser? A assinatura renova?', a: 'Sim, você pode cancelar a qualquer momento. A assinatura renova automaticamente, mas o cancelamento é simples e instantâneo.' },
  { q: 'Tem reembolso?', a: 'Oferecemos reembolso em até 7 dias após a compra, conforme nossa política de satisfação.' },
  { q: 'Como funciona a chamada de vídeo?', a: 'Após a assinatura, você receberá instruções para agendar sua chamada de vídeo exclusiva diretamente comigo!' },
  { q: 'Posso pedir conteúdo personalizado?', a: 'Sim! Assinantes podem solicitar conteúdos personalizados através das mensagens diretas na plataforma.' },
];

const FAQSection = () => (
  <div className="mx-5 mt-8">
    <h2 className="text-lg font-bold text-foreground mb-3" style={{ fontFamily: 'Outfit' }}>
      Perguntas Frequentes
    </h2>
    <Accordion type="single" collapsible className="w-full space-y-2">
      {faqs.map((faq, i) => (
        <AccordionItem key={i} value={`item-${i}`} className="border-0 bg-muted rounded-xl px-4">
          <AccordionTrigger className="text-sm text-left font-medium py-3">{faq.q}</AccordionTrigger>
          <AccordionContent className="text-sm text-muted-foreground pb-3">{faq.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
);

export default FAQSection;
