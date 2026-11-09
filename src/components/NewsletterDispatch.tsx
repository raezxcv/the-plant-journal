import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Send } from 'lucide-react';

interface NewsletterDispatchProps {
  variant?: 'paper' | 'canopy';
  idPrefix?: string;
}

export const NewsletterDispatch: React.FC<NewsletterDispatchProps> = ({
  variant = 'paper',
  idPrefix = 'dispatch',
}) => {
  const [email, setEmail] = useState('');
  const [edition, setEdition] = useState<'seasonal' | 'field-notes'>('seasonal');
  const [error, setError] = useState<string | null>(null);
  const [submittedEmail, setSubmittedEmail] = useState<string | null>(() => {
    try {
      return window.localStorage.getItem('tpj_subscriber_email_v1');
    } catch {
      return null;
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmed) {
      setError('Please enter your email address to receive the botanical dispatch.');
      return;
    }
    if (!emailPattern.test(trimmed)) {
      setError('Please enter a valid email address (for example, curator@kew.org).');
      return;
    }

    setError(null);
    setSubmittedEmail(trimmed);
    try {
      window.localStorage.setItem('tpj_subscriber_email_v1', trimmed);
    } catch {
      // Ignore storage error
    }
    setEmail('');
  };

  const isCanopy = variant === 'canopy';
  const emailInputId = `${idPrefix}-email-input`;
  const errorId = `${idPrefix}-email-error`;

  return (
    <section
      aria-labelledby={`${idPrefix}-heading`}
      className="border p-6 sm:p-8 lg:p-10"
      style={{
        backgroundColor: isCanopy ? 'var(--bg-canopy-elevated)' : 'var(--bg-parchment)',
        borderColor: isCanopy ? 'var(--border-canopy)' : 'var(--border-hairline)',
        color: isCanopy ? 'var(--canopy-text-primary)' : 'var(--ink-primary)',
      }}
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6">
          <h3 id={`${idPrefix}-heading`} className="text-2xl sm:text-3xl">
            Quarterly Field Notes &amp; Conservatory Dispatch
          </h3>
          <p
            className="mt-2.5 text-sm sm:text-base prose-measure"
            style={{
              color: isCanopy ? 'var(--canopy-text-secondary)' : 'var(--ink-secondary)',
            }}
          >
            Sent at each solstice and equinox. Includes seasonal photoperiod tables, glasshouse
            monographs, and herbarium accession updates—never commercial promotions.
          </p>
          <p
            className="mt-2 text-xs tabular-nums"
            style={{
              color: isCanopy ? 'var(--canopy-text-muted)' : 'var(--ink-muted)',
            }}
          >
            Next dispatch: Winter Solstice Issue · December 21
          </p>
        </div>

        <div className="lg:col-span-6">
          {submittedEmail ? (
            <div
              role="status"
              aria-live="polite"
              className="border p-5"
              style={{
                backgroundColor: isCanopy ? 'var(--bg-canopy)' : 'var(--bg-paper)',
                borderColor: isCanopy ? 'var(--border-canopy)' : 'var(--border-strong)',
              }}
            >
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0"
                  style={{
                    color: isCanopy ? '#8FB99B' : 'var(--accent-botanical)',
                  }}
                  aria-hidden="true"
                />
                <div>
                  <p className="font-editorial text-lg font-medium">
                    Recorded in the Subscriber Ledger
                  </p>
                  <p
                    className="mt-1 text-sm"
                    style={{
                      color: isCanopy
                        ? 'var(--canopy-text-secondary)'
                        : 'var(--ink-secondary)',
                    }}
                  >
                    Dispatches will be delivered to{' '}
                    <span className="font-semibold underline">{submittedEmail}</span> (
                    {edition === 'seasonal'
                      ? 'Solstice & Equinox Monograph Edition'
                      : 'Monthly Glasshouse Field Notes'}
                    ).
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmittedEmail(null);
                      try {
                        window.localStorage.removeItem('tpj_subscriber_email_v1');
                      } catch {
                        // Ignore
                      }
                    }}
                    className="btn-press mt-3 text-xs underline"
                    style={{
                      color: isCanopy ? 'var(--canopy-text-muted)' : 'var(--ink-muted)',
                    }}
                  >
                    Update subscriber address or edition preference
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <fieldset className="flex flex-wrap gap-3">
                <legend className="sr-only">Choose dispatch cadence</legend>
                <label
                  className="inline-flex cursor-pointer items-center gap-2 border px-3 py-1.5 text-xs font-medium"
                  style={{
                    borderColor:
                      edition === 'seasonal'
                        ? isCanopy
                          ? '#8FB99B'
                          : 'var(--accent-botanical)'
                        : isCanopy
                          ? 'var(--border-canopy)'
                          : 'var(--border-hairline)',
                    backgroundColor:
                      edition === 'seasonal'
                        ? isCanopy
                          ? 'var(--bg-canopy)'
                          : 'var(--bg-paper)'
                        : 'transparent',
                  }}
                >
                  <input
                    type="radio"
                    name={`${idPrefix}-edition`}
                    value="seasonal"
                    checked={edition === 'seasonal'}
                    onChange={() => setEdition('seasonal')}
                    className="accent-[#284734]"
                  />
                  <span>Quarterly Equinox &amp; Solstice Monograph</span>
                </label>

                <label
                  className="inline-flex cursor-pointer items-center gap-2 border px-3 py-1.5 text-xs font-medium"
                  style={{
                    borderColor:
                      edition === 'field-notes'
                        ? isCanopy
                          ? '#8FB99B'
                          : 'var(--accent-botanical)'
                        : isCanopy
                          ? 'var(--border-canopy)'
                          : 'var(--border-hairline)',
                    backgroundColor:
                      edition === 'field-notes'
                        ? isCanopy
                          ? 'var(--bg-canopy)'
                          : 'var(--bg-paper)'
                        : 'transparent',
                  }}
                >
                  <input
                    type="radio"
                    name={`${idPrefix}-edition`}
                    value="field-notes"
                    checked={edition === 'field-notes'}
                    onChange={() => setEdition('field-notes')}
                    className="accent-[#284734]"
                  />
                  <span>Monthly Conservatory Care Notes</span>
                </label>
              </fieldset>

              <div>
                <label htmlFor={emailInputId} className="block text-xs font-medium mb-1.5">
                  Reader Electronic Mail Address
                </label>
                <div className="flex flex-col gap-2.5 sm:flex-row">
                  <input
                    id={emailInputId}
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError(null);
                    }}
                    placeholder="reader@conservatory.org"
                    aria-invalid={error ? 'true' : 'false'}
                    aria-describedby={error ? errorId : undefined}
                    className="min-h-[44px] flex-1 border px-3.5 py-2 text-sm"
                    style={{
                      backgroundColor: isCanopy ? 'var(--bg-canopy)' : 'var(--bg-paper)',
                      borderColor: error
                        ? '#B83B2A'
                        : isCanopy
                          ? 'var(--border-canopy)'
                          : 'var(--border-strong)',
                      color: isCanopy ? 'var(--canopy-text-primary)' : 'var(--ink-primary)',
                    }}
                  />
                  <button
                    type="submit"
                    className="btn-press inline-flex min-h-[44px] items-center justify-center gap-2 border px-5 py-2 text-sm font-semibold"
                    style={{
                      backgroundColor: isCanopy
                        ? 'var(--canopy-text-primary)'
                        : 'var(--accent-botanical)',
                      borderColor: isCanopy
                        ? 'var(--canopy-text-primary)'
                        : 'var(--accent-botanical)',
                      color: isCanopy ? 'var(--bg-canopy)' : 'var(--canopy-text-primary)',
                    }}
                  >
                    <span>Subscribe to Dispatch</span>
                    <Send className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </div>
                {error && (
                  <p
                    id={errorId}
                    role="alert"
                    className="mt-2 flex items-center gap-1.5 text-xs font-medium"
                    style={{ color: isCanopy ? '#F29B8E' : '#9E2A1C' }}
                  >
                    <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    <span>{error}</span>
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

