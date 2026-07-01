'use client';

import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from 'react';
import {
  CheckCircle2,
  ArrowUpRight,
  User,
  Mail,
  Phone,
  GraduationCap,
  MessageSquare,
  Loader2,
  Check,
} from 'lucide-react';
import styles from './ContactForm.module.css';

type Programme = { value: string; label: string; sub: string };

const PROGRAMMES: Programme[] = [
  { value: 'ug', label: 'UG Course', sub: 'MBBS' },
  { value: 'pg', label: 'PG Course', sub: 'MD / MS / MDS' },
];

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [programme, setProgramme] = useState<string>('');
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = PROGRAMMES.find((p) => p.value === programme);

  // Close on outside-click / Escape
  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  // Sync activeIndex when opening
  useEffect(() => {
    if (open) {
      const idx = PROGRAMMES.findIndex((p) => p.value === programme);
      setActiveIndex(idx >= 0 ? idx : 0);
    }
  }, [open, programme]);

  const onTriggerKey = (e: ReactKeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setOpen(true);
    }
  };

  const onMenuKey = (e: ReactKeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % PROGRAMMES.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + PROGRAMMES.length) % PROGRAMMES.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      setProgramme(PROGRAMMES[activeIndex].value);
      setOpen(false);
    }
  };

  // Inlined in <form onSubmit={...}> below so TypeScript infers the event type
  // from JSX context and we avoid the deprecated FormEvent/FormEventHandler types.

  if (submitted) {
    return (
      <div className={styles.successWrapper}>
        <div className={styles.successHalo} aria-hidden />
        <div className={styles.successIcon}>
          <CheckCircle2 size={56} strokeWidth={1.2} />
        </div>
        <h3 className={styles.successTitle}>Thank you for reaching out.</h3>
        <p className={styles.successText}>
          A senior counsellor has been notified and will contact you within one
          working day &mdash; usually the same evening.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className={styles.resetBtn}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className={styles.formWrapper}>
      <header className={styles.formHead}>
        <div className={styles.formStatus}>
          <span className={styles.formStatusDot} aria-hidden />
          Live · Replies within 1 working day
        </div>
        <h3 className={styles.formTitle}>
          Begin the <em>conversation</em>
        </h3>
      </header>

      <form
        className={styles.form}
        onSubmit={async (e) => {
          e.preventDefault();
          if (!programme) {
            setOpen(true);
            return;
          }
          setLoading(true);
          setError(false);

          const form = new FormData(e.currentTarget);
          try {
            const res = await fetch('/api/send-enquiry', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                name: form.get('name'),
                email: form.get('email'),
                phone: form.get('phone'),
                course: form.get('course'),
                message: form.get('message'),
              }),
            });
            if (!res.ok) throw new Error('Request failed');
            setSubmitted(true);
          } catch {
            setError(true);
          } finally {
            setLoading(false);
          }
        }}
      >
        <div className={styles.section}>
          <span className={styles.sectionLabel}>
            <span className={styles.sectionLabelMark}>A</span>
            About you
          </span>

          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Full name
            </label>
            <div className={styles.inputWrap}>
              <User size={16} strokeWidth={1.5} className={styles.inputIcon} aria-hidden />
              <input
                type="text"
                id="name"
                name="name"
                className={styles.input}
                placeholder="As on your passport"
                required
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <div className={styles.inputWrap}>
                <Mail size={16} strokeWidth={1.5} className={styles.inputIcon} aria-hidden />
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.input}
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone" className={styles.label}>Phone</label>
              <div className={styles.inputWrap}>
                <Phone size={16} strokeWidth={1.5} className={styles.inputIcon} aria-hidden />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className={styles.input}
                  placeholder="+91 98xxx xxxxx"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.divider} aria-hidden />

        <div className={styles.section}>
          <span className={styles.sectionLabel}>
            <span className={styles.sectionLabelMark}>B</span>
            Your goal
          </span>

          {/* ───── Custom Programme dropdown ───── */}
          <div className={styles.formGroup}>
            <label htmlFor="course-trigger" className={styles.label}>
              Programme
            </label>

            <div
              ref={dropdownRef}
              className={`${styles.dropdown} ${open ? styles.dropdownOpen : ''}`}
            >
              <button
                type="button"
                id="course-trigger"
                aria-haspopup="listbox"
                aria-expanded={open}
                onClick={() => setOpen((o) => !o)}
                onKeyDown={onTriggerKey}
                className={`${styles.dropdownTrigger} ${!selectedOption ? styles.dropdownTriggerEmpty : ''}`}
              >
                <GraduationCap
                  size={16}
                  strokeWidth={1.5}
                  className={styles.inputIcon}
                  aria-hidden
                />
                <span className={styles.dropdownTriggerLabel}>
                  {selectedOption ? (
                    <>
                      <span className={styles.dropdownTriggerPrimary}>
                        {selectedOption.label}
                      </span>
                      <span className={styles.dropdownTriggerSub}>
                        {selectedOption.sub}
                      </span>
                    </>
                  ) : (
                    'Choose a programme'
                  )}
                </span>
                <svg
                  className={styles.dropdownChevron}
                  width="11"
                  height="11"
                  viewBox="0 0 12 12"
                  aria-hidden
                >
                  <path
                    d="M2.5 4.5L6 8L9.5 4.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {open && (
                <div
                  role="listbox"
                  aria-label="Programme"
                  aria-activedescendant={`opt-${PROGRAMMES[activeIndex]?.value}`}
                  tabIndex={-1}
                  onKeyDown={onMenuKey}
                  className={styles.dropdownMenu}
                >
                  {PROGRAMMES.map((opt, idx) => {
                    const isSelected = opt.value === programme;
                    const isActive = idx === activeIndex;
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        role="option"
                        id={`opt-${opt.value}`}
                        aria-selected={isSelected}
                        onMouseEnter={() => setActiveIndex(idx)}
                        onClick={() => {
                          setProgramme(opt.value);
                          setOpen(false);
                        }}
                        className={`${styles.dropdownOption} ${isSelected ? styles.dropdownOptionSelected : ''} ${isActive ? styles.dropdownOptionActive : ''}`}
                      >
                        <span className={styles.dropdownOptionRail} aria-hidden />
                        <span className={styles.dropdownOptionText}>
                          <span className={styles.dropdownOptionLabel}>
                            {opt.label}
                          </span>
                          <span className={styles.dropdownOptionSub}>
                            {opt.sub}
                          </span>
                        </span>
                        {isSelected && (
                          <Check
                            size={14}
                            strokeWidth={2}
                            className={styles.dropdownOptionCheck}
                            aria-hidden
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}

              <input type="hidden" name="course" value={programme} required />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>
              Note <span className={styles.optional}>&mdash; optional</span>
            </label>
            <div className={styles.inputWrap}>
              <MessageSquare
                size={16}
                strokeWidth={1.5}
                className={`${styles.inputIcon} ${styles.inputIconTextarea}`}
                aria-hidden
              />
              <textarea
                id="message"
                name="message"
                rows={3}
                className={`${styles.input} ${styles.textarea}`}
                placeholder="NEET score, year, anything you'd like us to know"
              />
            </div>
          </div>
        </div>

        <button type="submit" className={styles.submitBtn} disabled={loading}>
          {loading ? (
            <>
              <Loader2 size={16} className={styles.spinner} />
              <span>Sending&hellip;</span>
            </>
          ) : (
            <>
              <span>Submit enquiry</span>
              <ArrowUpRight size={16} />
            </>
          )}
        </button>

        {error && (
          <p className={styles.disclaimer} role="alert" style={{ color: '#f28b82' }}>
            Something went wrong sending your enquiry. Please try again, or call us directly.
          </p>
        )}

        <p className={styles.disclaimer}>
          By submitting you agree to our privacy policy. We do not share your
          details with third parties.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
