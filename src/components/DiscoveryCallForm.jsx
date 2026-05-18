import { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import styled from "styled-components";
import { calComUrl, contactEmail, formspreeId } from "../content/site";

const TEAM_SIZES = ["5–10", "11–25", "26–50", "Other"];
const YEARS = ["under 3", "3–5", "6–10", "11+"];

const DiscoveryCallForm = () => {
  const [state, handleSubmit] = useForm(formspreeId);
  const [values, setValues] = useState({
    name: "",
    email: "",
    business: "",
    website: "",
    industry: "",
    team: "",
    years: "",
    manual: "",
    success: "",
  });
  const [touched, setTouched] = useState({});
  const [redirecting, setRedirecting] = useState(false);

  const set = (key) => (e) => setValues((v) => ({ ...v, [key]: e.target.value }));
  const blur = (key) => () => setTouched((t) => ({ ...t, [key]: true }));

  const errors = {
    name: !values.name.trim() && "Tell me your name.",
    email:
      !values.email.trim() && "I'll need an email to write back.",
    business: !values.business.trim() && "What's the business called?",
    industry: !values.industry.trim() && "A few words on what you do.",
    team: !values.team && "Pick the closest team size.",
    years: !values.years && "About how long has the business run?",
    manual: !values.manual.trim() && "Tell me the part that's eating your week.",
  };

  const hasErrors = Object.values(errors).some(Boolean);

  const onSubmit = (e) => {
    e.preventDefault();
    setTouched(
      Object.keys(values).reduce((acc, k) => ({ ...acc, [k]: true }), {})
    );
    if (hasErrors) return;
    handleSubmit(e);
  };

  useEffect(() => {
    if (state.succeeded && calComUrl && !redirecting) {
      setRedirecting(true);
      const timer = setTimeout(() => {
        window.location.assign(calComUrl);
      }, 450);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded, redirecting]);

  // Static fallback success (no Cal.com URL configured)
  if (state.succeeded && !calComUrl) {
    return (
      <ThankYou>
        <p className="kicker">Got it</p>
        <h3>I read every one of these.</h3>
        <p>Reply within 48 hours, often sooner. If it's urgent, email me at{" "}
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
        </p>
      </ThankYou>
    );
  }

  // Cal.com redirect in flight
  if (state.succeeded && calComUrl) {
    return (
      <ThankYou>
        <p className="kicker">Got it</p>
        <h3>Sending you to my calendar…</h3>
        <p>
          If nothing happens in a moment,{" "}
          <a href={calComUrl}>open the booking page directly</a>.
        </p>
      </ThankYou>
    );
  }

  return (
    <Form onSubmit={onSubmit} noValidate>
      {state.errors && state.errors.length > 0 && (
        <div className="server-error" role="alert">
          Something broke on my end sending this. Try again, or email me at{" "}
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
        </div>
      )}

      <Field>
        <label htmlFor="name">Your name</label>
        <input
          id="name"
          name="name"
          value={values.name}
          onChange={set("name")}
          onBlur={blur("name")}
          autoComplete="name"
        />
        {touched.name && errors.name && <p className="err">{errors.name}</p>}
      </Field>

      <Field>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={set("email")}
          onBlur={blur("email")}
          autoComplete="email"
        />
        {touched.email && errors.email && <p className="err">{errors.email}</p>}
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </Field>

      <Field>
        <label htmlFor="business">Business name</label>
        <input
          id="business"
          name="business"
          value={values.business}
          onChange={set("business")}
          onBlur={blur("business")}
        />
        {touched.business && errors.business && (
          <p className="err">{errors.business}</p>
        )}
      </Field>

      <Field>
        <label htmlFor="website">Business website (optional)</label>
        <input
          id="website"
          name="website"
          type="url"
          value={values.website}
          onChange={set("website")}
          placeholder="https://"
        />
      </Field>

      <Field>
        <label htmlFor="industry">Industry</label>
        <input
          id="industry"
          name="industry"
          value={values.industry}
          onChange={set("industry")}
          onBlur={blur("industry")}
          placeholder="A few words — agency, home services, healthcare…"
        />
        {touched.industry && errors.industry && (
          <p className="err">{errors.industry}</p>
        )}
      </Field>

      <Field>
        <span className="label">Team size</span>
        <div className="chips" role="radiogroup" aria-label="Team size">
          {TEAM_SIZES.map((opt) => (
            <label key={opt} className={values.team === opt ? "chip is-on" : "chip"}>
              <input
                type="radio"
                name="team"
                value={opt}
                checked={values.team === opt}
                onChange={set("team")}
                onBlur={blur("team")}
              />
              {opt}
            </label>
          ))}
        </div>
        {touched.team && errors.team && <p className="err">{errors.team}</p>}
      </Field>

      <Field>
        <span className="label">Years in business</span>
        <div className="chips" role="radiogroup" aria-label="Years in business">
          {YEARS.map((opt) => (
            <label key={opt} className={values.years === opt ? "chip is-on" : "chip"}>
              <input
                type="radio"
                name="years"
                value={opt}
                checked={values.years === opt}
                onChange={set("years")}
                onBlur={blur("years")}
              />
              {opt}
            </label>
          ))}
        </div>
        {touched.years && errors.years && <p className="err">{errors.years}</p>}
      </Field>

      <Field>
        <label htmlFor="manual">What's the most manual part of your week right now?</label>
        <textarea
          id="manual"
          name="manual"
          rows="4"
          value={values.manual}
          onChange={set("manual")}
          onBlur={blur("manual")}
          maxLength="600"
        />
        {touched.manual && errors.manual && (
          <p className="err">{errors.manual}</p>
        )}
      </Field>

      <Field>
        <label htmlFor="success">What would change if it ran without you? (optional)</label>
        <textarea
          id="success"
          name="success"
          rows="3"
          value={values.success}
          onChange={set("success")}
          maxLength="600"
        />
      </Field>

      <button type="submit" className="submit" disabled={state.submitting}>
        {state.submitting ? "Sending…" : "Send and book a time"}
      </button>
      <p className="hint">
        Sending takes a second. Then I'll send you to my calendar to pick a time.
      </p>
    </Form>
  );
};

export default DiscoveryCallForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  max-width: 640px;

  .server-error {
    padding: 1rem;
    background-color: #fff5f0;
    border: 1px solid var(--accent-warm);
    color: var(--ink);
    font-family: var(--font-sans);
    font-size: var(--type-14);
  }
  .server-error a {
    color: var(--ink);
  }

  .submit {
    align-self: flex-start;
    background-color: var(--accent);
    color: var(--ink);
    border: 1px solid var(--ink);
    padding: 0.875rem 1.5rem;
    font-family: var(--font-sans);
    font-weight: 700;
    font-size: var(--type-16);
    cursor: pointer;
    transition: background-color var(--motion-base) var(--easing),
      color var(--motion-base) var(--easing);
  }
  .submit:hover:not(:disabled) {
    background-color: var(--ink);
    color: var(--accent);
  }
  .submit:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }

  .hint {
    margin: 0;
    font-family: var(--font-sans);
    font-size: var(--type-12);
    color: var(--ink-soft);
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  label,
  .label {
    font-family: var(--font-sans);
    font-size: var(--type-14);
    font-weight: 600;
    color: var(--ink);
  }

  input,
  textarea {
    width: 100%;
    padding: 0.75rem 0.875rem;
    font-family: var(--font-sans);
    font-size: var(--type-16);
    color: var(--ink);
    background-color: var(--paper);
    border: 1px solid var(--rule);
    transition: border-color var(--motion-base) var(--easing);
  }
  input:focus,
  textarea:focus {
    outline: none;
    border-color: var(--ink);
  }
  textarea {
    resize: vertical;
  }

  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  .chip {
    border: 1px solid var(--rule);
    padding: 0.5rem 0.875rem;
    font-family: var(--font-sans);
    font-size: var(--type-14);
    cursor: pointer;
    transition: background-color var(--motion-base) var(--easing),
      color var(--motion-base) var(--easing);
  }
  .chip input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }
  .chip:hover {
    background-color: var(--paper-soft);
  }
  .chip.is-on {
    background-color: var(--ink);
    color: var(--accent);
    border-color: var(--ink);
  }

  .err {
    margin: 0;
    font-family: var(--font-sans);
    font-size: var(--type-12);
    color: var(--accent-warm);
  }
`;

const ThankYou = styled.div`
  max-width: 640px;
  padding: var(--space-8);
  background-color: var(--paper-soft);
  border: 1px solid var(--rule);

  .kicker {
    margin: 0;
    font-family: var(--font-sans);
    font-size: var(--type-12);
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--ink-soft);
  }
  h3 {
    margin: 0.25rem 0 1rem;
    font-family: var(--font-serif);
    font-size: var(--type-32);
  }
  p {
    margin: 0;
    font-family: var(--font-sans);
    font-size: var(--type-16);
    color: var(--ink);
  }
  a {
    color: var(--ink);
    text-decoration: underline;
  }
`;
