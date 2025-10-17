import { NextSeo } from "next-seo";
import classes from "./polityka-prywatnosci.module.scss";

export default function PolitykaPrywatnosci() {
  return (
    <>
      <NextSeo
        title="Polityka Prywatności - Speed Light Energy | Ochrona Danych Osobowych"
        description="Polityka prywatności Speed Light Energy - informacje o przetwarzaniu danych osobowych z formularzy kontaktowych, plikach cookies i bezpieczeństwie zgodnie z RODO."
        canonical="https://www.slenergy.pl/polityka-prywatnosci"
      />

      <div className={classes.policyContainer}>
        <div className={classes.policyHeader}>
          <h1 className={classes.policyTitle}>Polityka Prywatności</h1>
          <p className={classes.policySubtitle}>
            Speed Light Energy - Ochrona Danych Osobowych
          </p>
          <div className={classes.lastUpdate}>
            Ostatnia aktualizacja: {new Date().toLocaleDateString("pl-PL")}
          </div>
        </div>

        <div className={classes.policyContent}>
          <section className={classes.policySection}>
            <h2 className={classes.sectionTitle}>§ 1 Informacje ogólne</h2>
            <div className={classes.sectionContent}>
              <p>
                <strong>Administratorem</strong> danych osobowych jest firma
                <strong> Speed Light Energy</strong> z siedzibą w Opolu, NIP:{" "}
                <strong>7543054995</strong>, REGON: <strong>389501522</strong>.
              </p>
              <p>
                Kontakt w sprawach ochrony danych osobowych:
                <strong> kontakt@slenergy.pl</strong>
              </p>
            </div>
          </section>

          <section className={classes.policySection}>
            <h2 className={classes.sectionTitle}>
              § 2 Dane z formularza kontaktowego
            </h2>
            <div className={classes.sectionContent}>
              <p>
                Podając dane w formularzu kontaktowym, wyrażasz zgodę na
                przetwarzanie:
              </p>
              <ul className={classes.list}>
                <li>
                  <strong>Imienia</strong> - w celu identyfikacji i
                  personalizacji odpowiedzi
                </li>
                <li>
                  <strong>Adresu email</strong> - w celu przesłania odpowiedzi
                  na zapytanie
                </li>
                <li>
                  <strong>Treści wiadomości</strong> - w celu udzielenia
                  kompleksowej odpowiedzi
                </li>
              </ul>
              <p className={classes.highlight}>
                <strong>Podstawa prawna:</strong> Art. 6 ust. 1 lit. b RODO -
                niezbędność do wykonania umowy lub podjęcia działań przed
                zawarciem umowy.
              </p>
            </div>
          </section>

          <section className={classes.policySection}>
            <h2 className={classes.sectionTitle}>
              § 3 Pliki cookies (ciasteczka)
            </h2>
            <div className={classes.sectionContent}>
              <p>Nasza strona internetowa używa plików cookies w celu:</p>
              <ul className={classes.list}>
                <li>Prawidłowego działania formularzy</li>
                <li>Analizy ruchu na stronie (Google Analytics)</li>
                <li>Personalizacji treści</li>
                <li>Zapewnienia bezpieczeństwa</li>
              </ul>
              <p>
                Pliki cookies możesz wyłączyć w ustawieniach swojej
                przeglądarki, jednak może to wpłynąć na niektóre funkcjonalności
                strony.
              </p>
            </div>
          </section>

          <section className={classes.policySection}>
            <h2 className={classes.sectionTitle}>§ 4 Bezpieczeństwo danych</h2>
            <div className={classes.sectionContent}>
              <p>Zapewniamy bezpieczeństwo przetwarzania danych poprzez:</p>
              <ul className={classes.list}>
                <li>Szyfrowane połączenie SSL</li>
                <li>Bezpieczny hosting</li>
                <li>Ograniczony dostęp do danych</li>
                <li>Regularne aktualizacje zabezpieczeń</li>
              </ul>
              <p>
                Dane z formularza kontaktowego są przetwarzane przez usługę
                <strong> EmailJS</strong> i przechowywane w sposób bezpieczny.
              </p>
            </div>
          </section>

          <section className={classes.policySection}>
            <h2 className={classes.sectionTitle}>
              § 5 Okres przechowywania danych
            </h2>
            <div className={classes.sectionContent}>
              <p>Dane osobowe będą przechowywane przez okres:</p>
              <ul className={classes.list}>
                <li>
                  <strong>Formularz kontaktowy</strong> - 2 lata od ostatniego
                  kontaktu
                </li>
                <li>
                  <strong>Dane do faktury</strong> - 5 lat zgodnie z wymogami
                  podatkowymi
                </li>
                <li>
                  <strong>Newsletter</strong> - do momentu wypisania się
                </li>
              </ul>
            </div>
          </section>

          <section className={classes.policySection}>
            <h2 className={classes.sectionTitle}>§ 6 Prawa użytkownika</h2>
            <div className={classes.sectionContent}>
              <p>Zgodnie z RODO przysługują Ci następujące prawa:</p>
              <div className={classes.rightsGrid}>
                <div className={classes.rightItem}>
                  <h4>🔍 Prawo dostępu</h4>
                  <p>Możesz żądać informacji jakie dane przetwarzamy</p>
                </div>
                <div className={classes.rightItem}>
                  <h4>✏️ Prawo sprostowania</h4>
                  <p>Możesz żądać poprawienia nieprawidłowych danych</p>
                </div>
                <div className={classes.rightItem}>
                  <h4>🗑️ Prawo usunięcia</h4>
                  <p>Możesz żądać usunięcia swoich danych</p>
                </div>
                <div className={classes.rightItem}>
                  <h4>⏸️ Prawo do ograniczenia</h4>
                  <p>Możesz żądać ograniczenia przetwarzania</p>
                </div>
                <div className={classes.rightItem}>
                  <h4>📤 Prawo do przenoszenia</h4>
                  <p>Możesz żądać przeniesienia danych</p>
                </div>
                <div className={classes.rightItem}>
                  <h4>🚫 Prawo sprzeciwu</h4>
                  <p>Możesz sprzeciwić się przetwarzaniu</p>
                </div>
              </div>
            </div>
          </section>

          <section className={classes.policySection}>
            <h2 className={classes.sectionTitle}>§ 7 Odbiorcy danych</h2>
            <div className={classes.sectionContent}>
              <p>Twoje dane mogą być przekazywane:</p>
              <ul className={classes.list}>
                <li>Dostawcom usług IT (hosting, EmailJS)</li>
                <li>Podmiotom uprawnionym na podstawie przepisów prawa</li>
                <li>Partnerom biznesowym wyłącznie za Twoją zgodą</li>
              </ul>
            </div>
          </section>

          <section className={classes.policySection}>
            <h2 className={classes.sectionTitle}>§ 8 Kontakt</h2>
            <div className={classes.sectionContent}>
              <div className={classes.contactInfo}>
                <p>
                  <strong>Speed Light Energy</strong>
                </p>
                <p>
                  📧 Email: <strong>kontakt@slenergy.pl</strong>
                </p>
                <p>
                  📞 Telefon: <strong>+48 606 337 100</strong>
                </p>
                <p>
                  W sprawach ochrony danych osobowych prosimy o kontakt mailowy.
                </p>
              </div>
            </div>
          </section>

          <div className={classes.policyFooter}>
            <p>
              <strong>Niniejsza polityka prywatności może ulec zmianie.</strong>
              Wszystkie aktualizacje będą publikowane na tej stronie.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
