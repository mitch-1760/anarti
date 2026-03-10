'use client';

import { useState } from 'react';

const C = {
  bg: '#14161e',
  card: '#1c1f2b',
  border: '#272b3a',
  text: '#e2e4e9',
  muted: '#7a7f96',
  accent: '#8b5cf6',
  accentDim: '#8b5cf620',
  green: '#22c55e',
  greenDim: '#22c55e18',
  yellow: '#eab308',
  yellowDim: '#eab30818',
  red: '#ef4444',
  redDim: '#ef444418',
  blue: '#3b82f6',
  blueDim: '#3b82f618',
};

const slides = [
  // 0: TITLE
  {
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center', padding: '56px 72px' }}>
        <div style={{ fontSize: 13, letterSpacing: 3, color: C.accent, textTransform: 'uppercase', marginBottom: 28 }}>1760 Strategic AI × Anarti Therapeutics</div>
        <h1 style={{ fontSize: 52, fontWeight: 700, color: C.text, lineHeight: 1.15, marginBottom: 20 }}>Implementation Plan</h1>
        <div style={{ width: 90, height: 3, backgroundColor: C.accent, borderRadius: 4, marginBottom: 28 }} />
        <p style={{ color: C.muted, fontSize: 18 }}>March 10, 2026</p>
        <p style={{ color: C.muted, fontSize: 14, marginTop: 10 }}>Confidential — For Discussion</p>
      </div>
    ),
  },
  // 1: ENGAGEMENT SUMMARY
  {
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '52px 60px 36px' }}>
        <div style={{ fontSize: 12, letterSpacing: 2, color: C.accent, textTransform: 'uppercase', marginBottom: 8 }}>Overview</div>
        <h2 style={{ fontSize: 32, fontWeight: 700, color: C.text, marginBottom: 32 }}>Engagement Summary</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, flex: 1 }}>
          {[
            { label: 'Scope', value: 'Lead Nurture Engine + Authority Engine (Lite)' },
            { label: 'Contact Pool', value: '~2,600 practitioners (1,600 purchased + 1,000 conference)' },
            { label: 'Term', value: 'Month Zero (3-week build) + 3 months active management' },
            { label: 'Hard Deadline', value: 'April 3 — all infrastructure live before conference travel' },
          ].map((item, i) => (
            <div key={i} style={{ backgroundColor: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 24 }}>
              <div style={{ fontSize: 12, color: C.accent, textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 10 }}>{item.label}</div>
              <div style={{ fontSize: 17, color: C.text, lineHeight: 1.5 }}>{item.value}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 22, backgroundColor: C.accentDim, border: `1px solid ${C.accent}40`, borderRadius: 14, padding: 22, display: 'flex', alignItems: 'center', gap: 18 }}>
          <div style={{ fontSize: 13, color: C.accent, textTransform: 'uppercase', letterSpacing: 1.5, fontWeight: 600, whiteSpace: 'nowrap' }}>KPIs</div>
          <div style={{ width: 1, height: 36, backgroundColor: `${C.accent}40` }} />
          <div style={{ display: 'flex', gap: 36, flex: 1 }}>
            <div><span style={{ fontSize: 28, fontWeight: 700, color: C.text }}>10</span><span style={{ fontSize: 15, color: C.muted, marginLeft: 10 }}>booked meetings with qualified practitioners in 60 days</span></div>
            <div><span style={{ fontSize: 28, fontWeight: 700, color: C.text }}>12</span><span style={{ fontSize: 15, color: C.muted, marginLeft: 10 }}>original content pieces in 60 days</span></div>
          </div>
        </div>
      </div>
    ),
  },
  // 2: WHAT WE'RE BUILDING
  {
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '52px 60px 36px' }}>
        <div style={{ fontSize: 12, letterSpacing: 2, color: C.accent, textTransform: 'uppercase', marginBottom: 8 }}>Systems</div>
        <h2 style={{ fontSize: 32, fontWeight: 700, color: C.text, marginBottom: 32 }}>What We're Building</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, flex: 1 }}>
          <div style={{ backgroundColor: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 28, display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 13, color: C.accent, textTransform: 'uppercase', letterSpacing: 1.5, fontWeight: 600, marginBottom: 14 }}>Lead Nurture Engine</div>
            <div style={{ fontSize: 16, color: C.text, lineHeight: 1.7, flex: 1 }}>
              Automated email outreach across four practitioner segments. Each segment gets a 7-email sequence tailored to their role, pain points, and buying behavior. Replies are classified and routed. Positive responses trigger meeting booking.
            </div>
            <div style={{ marginTop: 18, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['3 domains', '9 inboxes', '4 segments', '7-email sequences', 'AI reply handling'].map((t, i) => (
                <span key={i} style={{ fontSize: 12, color: C.accent, backgroundColor: C.accentDim, padding: '5px 12px', borderRadius: 20 }}>{t}</span>
              ))}
            </div>
          </div>
          <div style={{ backgroundColor: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 28, display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 13, color: C.green, textTransform: 'uppercase', letterSpacing: 1.5, fontWeight: 600, marginBottom: 14 }}>Authority Engine (Lite)</div>
            <div style={{ fontSize: 16, color: C.text, lineHeight: 1.7, flex: 1 }}>
              Three recorded sessions with Alka (1–2 hrs each). Recordings run through an AI content extraction pipeline that transforms transcripts into finished assets. Output feeds directly into outreach sequences (social proof, credibility content) and conference collateral. Content library transfers to Alka at close.
              <div style={{ marginTop: 12, padding: '10px 14px', backgroundColor: C.yellowDim, border: `1px solid ${C.yellow}30`, borderRadius: 8, fontSize: 14 }}>
                <span style={{ color: C.yellow, fontWeight: 600 }}>Session 1 recorded Mar 5.</span>
                <span style={{ color: C.muted }}> First content batch in production — articles, social posts, email inserts, conference collateral. Delivery this month.</span>
              </div>
            </div>
            <div style={{ marginTop: 14, backgroundColor: C.bg, borderRadius: 10, padding: 14 }}>
              <div style={{ fontSize: 12, color: C.muted, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10 }}>Pipeline</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                {['Recorded Session', '→', 'AI Extraction', '→', 'Articles, Social, Email, Collateral'].map((t, i) => (
                  i % 2 === 1
                    ? <span key={i} style={{ fontSize: 14, color: C.green }}>→</span>
                    : <span key={i} style={{ fontSize: 13, color: C.text, backgroundColor: C.greenDim, padding: '5px 10px', borderRadius: 6 }}>{t}</span>
                ))}
              </div>
            </div>
            <div style={{ marginTop: 12, fontSize: 13, color: C.muted, lineHeight: 1.5 }}>
              We create the assets. Social posting and account management is on Alka's side — not in scope.
            </div>
            <div style={{ marginTop: 12, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['3 sessions', '12+ pieces', 'AI extraction', 'Multi-format', 'Assets only — no posting'].map((t, i) => (
                <span key={i} style={{ fontSize: 12, color: C.green, backgroundColor: C.greenDim, padding: '5px 12px', borderRadius: 20 }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  // 3: PRACTITIONER SEGMENTS
  {
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '52px 60px 36px' }}>
        <div style={{ fontSize: 12, letterSpacing: 2, color: C.accent, textTransform: 'uppercase', marginBottom: 8 }}>Targeting</div>
        <h2 style={{ fontSize: 32, fontWeight: 700, color: C.text, marginBottom: 32 }}>Four Practitioner Tracks</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, flex: 1 }}>
          {[
            { track: 'Track 1', name: 'Massage Therapists', color: C.accent, desc: 'Largest segment. Integration angle: pain management adjunct, treatment enhancement, client retention.', status: 'Copy complete', statusColor: C.green },
            { track: 'Track 2', name: 'Physical Therapists', color: C.blue, desc: 'Clinical integration angle. Recovery support, treatment protocol complement, patient outcomes.', status: 'Copy in progress', statusColor: C.yellow },
            { track: 'Track 3', name: 'Spa Directors / Wellness Centers', color: '#ec4899', desc: 'Revenue and experience angle. Premium service add-on, client differentiation, membership enhancement.', status: 'Copy in progress', statusColor: C.yellow },
            { track: 'Track 4', name: 'Distributors / Wholesale', color: '#f97316', desc: 'Smallest segment. Business opportunity angle. Margin, product demand, retail partner support.', status: 'Copy in progress', statusColor: C.yellow },
          ].map((t, i) => (
            <div key={i} style={{ backgroundColor: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: t.color, backgroundColor: t.color + '18', padding: '4px 10px', borderRadius: 6 }}>{t.track}</span>
                  <span style={{ fontSize: 17, fontWeight: 600, color: C.text }}>{t.name}</span>
                </div>
              </div>
              <div style={{ fontSize: 15, color: C.muted, lineHeight: 1.6, marginBottom: 14 }}>{t.desc}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: t.statusColor }} />
                <span style={{ fontSize: 13, color: t.statusColor }}>{t.status}</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 16 }} />
      </div>
    ),
  },
  // 4: INFRASTRUCTURE STATUS
  {
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '52px 60px 36px' }}>
        <div style={{ fontSize: 12, letterSpacing: 2, color: C.accent, textTransform: 'uppercase', marginBottom: 8 }}>Status</div>
        <h2 style={{ fontSize: 32, fontWeight: 700, color: C.text, marginBottom: 32 }}>Infrastructure — Where We Stand</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginBottom: 18 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { item: 'Sending domains (3)', status: 'Complete', color: C.green },
              { item: 'Sending inboxes (9)', status: 'Complete', color: C.green },
              { item: 'Warm-up (~14 days)', status: 'On Track', color: C.green },
              { item: 'Messaging framework', status: 'Complete', color: C.green },
              { item: 'Track 1 sequences', status: 'Complete', color: C.green },
              { item: 'Tracks 2–4 sequences', status: 'In Progress', color: C.yellow },
              { item: 'Conference sequences', status: 'In Progress', color: C.yellow },
              { item: 'Content Session 1', status: 'In Production', color: C.yellow },
              { item: 'Pipeline tracking', status: 'Scheduled', color: C.blue },
            ].map((row, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, backgroundColor: C.card, border: `1px solid ${C.border}`, borderRadius: 10, padding: '10px 16px' }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: row.color, flexShrink: 0 }} />
                <span style={{ fontSize: 15, fontWeight: 600, color: C.text, flex: 1 }}>{row.item}</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: row.color }}>{row.status}</span>
              </div>
            ))}
          </div>
          <div style={{ backgroundColor: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 24, display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 13, color: C.accent, textTransform: 'uppercase', letterSpacing: 1.5, fontWeight: 600, marginBottom: 18 }}>Domain Allocation</div>
            {[
              { domain: 'Domain A', inboxes: '3 inboxes', audience: 'Purchased practitioner list', tracks: 'Track 1 (Massage Therapists) + Track 2 (Physical Therapists)', color: C.accent },
              { domain: 'Domain B', inboxes: '3 inboxes', audience: 'Purchased practitioner list', tracks: 'Track 3 (Spa Directors) + Track 4 (Distributors)', color: C.blue },
              { domain: 'Domain C', inboxes: '3 inboxes', audience: 'Conference attendee list only', tracks: 'Pre-conference (3 emails) + Post-conference (5 emails)', color: C.green },
            ].map((d, i) => (
              <div key={i} style={{ marginBottom: i < 2 ? 14 : 0, paddingBottom: i < 2 ? 14 : 0, borderBottom: i < 2 ? `1px solid ${C.border}` : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: d.color }}>{d.domain}</span>
                  <span style={{ fontSize: 12, color: C.muted }}>({d.inboxes})</span>
                </div>
                <div style={{ fontSize: 14, color: C.muted, marginBottom: 4 }}>{d.audience}</div>
                <div style={{ fontSize: 14, color: C.text }}>{d.tracks}</div>
              </div>
            ))}
            <div style={{ marginTop: 16, fontSize: 13, color: C.muted, backgroundColor: C.bg, borderRadius: 8, padding: 12, lineHeight: 1.5 }}>
              Domains are separated by audience risk profile. If the purchased list causes deliverability issues, Domain C stays clean for the higher-value conference contacts.
            </div>
          </div>
        </div>
      </div>
    ),
  },
  // 5.5: CONTACT LIST
  {
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '52px 60px 36px' }}>
        <div style={{ fontSize: 12, letterSpacing: 2, color: C.yellow, textTransform: 'uppercase', marginBottom: 8 }}>Requires Decision</div>
        <h2 style={{ fontSize: 32, fontWeight: 700, color: C.text, marginBottom: 12 }}>Contact List — Scope vs. Received</h2>
        <div style={{ fontSize: 16, color: C.muted, lineHeight: 1.6, marginBottom: 22 }}>
          The purchased list came back with 7,705 contacts — significantly more than the scoped 1,600. After classification and exclusions, 7,396 are eligible. Our current infrastructure and timeline support ~1,600 contacts for this engagement. We need to select which contacts go into the first wave.
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginBottom: 18 }}>
          <div style={{ backgroundColor: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 24 }}>
            <div style={{ fontSize: 13, color: C.accent, textTransform: 'uppercase', letterSpacing: 1.5, fontWeight: 600, marginBottom: 16 }}>Classification (7,396 eligible)</div>
            {[
              { segment: 'Massage Therapists', count: '122', logic: 'Title contains massage/LMT/bodywork', color: C.accent },
              { segment: 'Physical Therapists', count: '2,198', logic: 'PT/DPT titles, rehab/orthopedic/sports/fitness companies', color: C.blue },
              { segment: 'Spa Directors', count: '2,799', logic: 'Spa/esthetician/aesthetician, wellness/beauty/holistic businesses', color: '#ec4899' },
              { segment: 'Distributors', count: '2,277', logic: 'Sales/distribution/wholesale, non-competitor CBD brands, hospital/healthcare orgs', color: '#f97316' },
            ].map((s, i) => (
              <div key={i} style={{ marginBottom: i < 3 ? 12 : 0, paddingBottom: i < 3 ? 12 : 0, borderBottom: i < 3 ? `1px solid ${C.border}` : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                  <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: s.color, flexShrink: 0 }} />
                  <span style={{ fontSize: 16, fontWeight: 600, color: C.text, flex: 1 }}>{s.segment}</span>
                  <span style={{ fontSize: 18, fontWeight: 700, color: C.text }}>{s.count}</span>
                </div>
                <div style={{ fontSize: 13, color: C.muted, marginLeft: 20 }}>{s.logic}</div>
              </div>
            ))}
            <div style={{ marginTop: 14, paddingTop: 14, borderTop: `1px solid ${C.red}30`, display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: C.red, flexShrink: 0 }} />
              <span style={{ fontSize: 15, fontWeight: 600, color: C.red, flex: 1 }}>Excluded</span>
              <span style={{ fontSize: 17, fontWeight: 700, color: C.red }}>309</span>
            </div>
            <div style={{ fontSize: 13, color: C.muted, marginLeft: 20, marginTop: 4 }}>Chiropractors, acupuncturists (per Alka's direction), and known CBD competitors (Charlotte's Web, Green Roads, Extract Labs, etc.)</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ backgroundColor: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 24, flex: 1 }}>
              <div style={{ fontSize: 13, color: C.yellow, textTransform: 'uppercase', letterSpacing: 1.5, fontWeight: 600, marginBottom: 14 }}>Why ~1,600?</div>
              <div style={{ fontSize: 15, color: C.text, lineHeight: 1.8 }}>
                3 domains and 9 inboxes are already warming and cannot be expanded within the April 3 deadline. New domains would need 2–3 weeks of warm-up that we don't have.<br /><br />
                At current send capacity (~180 emails/day across Domains A + B), ~1,600 contacts is the maximum we can move through a full 7-email sequence before the conference window.
              </div>
            </div>
            <div style={{ backgroundColor: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 24 }}>
              <div style={{ fontSize: 13, color: C.green, textTransform: 'uppercase', letterSpacing: 1.5, fontWeight: 600, marginBottom: 10 }}>Data Quality</div>
              <div style={{ fontSize: 14, color: C.text, lineHeight: 1.7 }}>
                Zero duplicate emails across files — each lead appears in exactly one campaign. Competitors excluded. No cross-contamination between segments.
              </div>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: C.yellowDim, border: `1px solid ${C.yellow}40`, borderRadius: 14, padding: 22 }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: C.yellow, marginBottom: 10 }}>Decision for Alka</div>
          <div style={{ fontSize: 15, color: C.text, lineHeight: 1.7 }}>
            Which ~1,600 contacts should be prioritized for the first wave? The remaining contacts are not lost — they can be loaded into subsequent campaigns as the engagement progresses, or added to a Phase 2 expansion if results warrant scaling infrastructure.
          </div>
        </div>
        <div style={{ backgroundColor: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 22, marginTop: 14 }}>
          <div style={{ fontSize: 13, color: C.accent, textTransform: 'uppercase', letterSpacing: 1.5, fontWeight: 600, marginBottom: 14 }}>Classification Decisions Made</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {[
              'Chiropractors and acupuncturists excluded per Alka\'s direction in the kickoff brief',
              'Known CBD competitors excluded (Charlotte\'s Web, Green Roads, Extract Labs, etc.)',
              'Fitness/gym/sports companies classified as Physical Therapist (recovery/pain angle)',
              'Wellness studios, beauty, and holistic businesses classified as Spa Director',
              'Non-competitor CBD brands classified as Distributor (potential wholesale partners)',
              'Hospital/healthcare decision-makers classified as Distributor (B2B institutional sales)',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: C.accent, marginTop: 7, flexShrink: 0 }} />
                <span style={{ fontSize: 14, color: C.muted, lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  // 6: TIMELINE
  {
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '44px 60px 32px' }}>
        <div style={{ fontSize: 12, letterSpacing: 2, color: C.accent, textTransform: 'uppercase', marginBottom: 8 }}>Timeline</div>
        <h2 style={{ fontSize: 32, fontWeight: 700, color: C.text, marginBottom: 22 }}>Kickoff to Conference</h2>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 7 }}>
          {[
            { week: 'Feb 24 – Mar 7', label: 'Discovery + Infrastructure + Content Session 1', status: 'done', color: C.green, items: 'Kickoff. Domains, inboxes, warming. Messaging framework. Brand assets. Track 1 copy. Content Session 1 recorded Mar 5.' },
            { week: 'Mar 10 – 14', label: 'Sequence Build + Content Production', status: 'now', color: C.accent, items: 'This meeting. Finalize Tracks 2–4 copy. Template all sequences. First content batch from Session 1 in production (articles, social posts, email inserts, conference collateral). Lock KPIs.' },
            { week: 'Mar 17 – 21', label: 'System Launch', status: 'next', color: C.blue, items: 'Load purchased list into Instantly in batches of 100–200/day by segment. Track 1 (Massage Therapists) activates first. Tracks 2–4 staggered over 48–72 hrs. Pipeline tracking system live. Daily deliverability monitoring begins (bounce rates, open rates, spam complaints). Reply classification and routing active. 60-day KPI clock starts.' },
            { week: 'Mar 24 – 28', label: 'Pre-Conference', status: 'next', color: C.blue, items: 'Pre-conference warm-up emails sent to attendee list (3-email sequence, if list received by this date). Conference collateral delivered to Alka: talking points, panel prep notes, award presentation materials. First sequence performance review: open rates, reply rates, bounce rates by track. Adjust subject lines, send times, or cadence based on Week 1 data. Confirm post-conference sequence templates are loaded and ready to activate.' },
            { week: 'Apr 3', label: 'Conference Travel', status: 'deadline', color: C.red, items: 'All outreach infrastructure running. Pre-conference emails complete. Post-conference sequences pre-built.' },
            { week: 'Apr 6 – 9', label: 'Conference + Follow-Up', status: 'next', color: C.blue, items: 'Attendee list ingested within 48 hrs. Post-conference sequence activated. Pipeline captures all conference leads.' },
          ].map((row, i) => (
            <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'stretch' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 22, flexShrink: 0 }}>
                <div style={{ width: 14, height: 14, borderRadius: '50%', backgroundColor: row.status === 'done' ? C.green : row.status === 'now' ? C.accent : row.status === 'deadline' ? C.red : C.border, border: row.status === 'done' ? 'none' : `2px solid ${row.color}40`, marginTop: 5, flexShrink: 0 }} />
                {i < 5 && <div style={{ width: 2, flex: 1, backgroundColor: C.border, marginTop: 4 }} />}
              </div>
              <div style={{ flex: 1, backgroundColor: row.status === 'now' ? C.accentDim : row.status === 'deadline' ? C.redDim : C.card, border: `1px solid ${row.status === 'now' ? C.accent + '40' : row.status === 'deadline' ? C.red + '40' : C.border}`, borderRadius: 12, padding: '12px 18px', marginBottom: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 5 }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: row.color }}>{row.week}</span>
                  <span style={{ fontSize: 15, fontWeight: 600, color: C.text }}>{row.label}</span>
                  {row.status === 'now' && <span style={{ fontSize: 10, fontWeight: 700, color: C.accent, backgroundColor: C.accentDim, padding: '3px 10px', borderRadius: 10, textTransform: 'uppercase', letterSpacing: 1 }}>Current</span>}
                </div>
                <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.5 }}>{row.items}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  // 6: ACTIVE MANAGEMENT + KPI
  {
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '52px 60px 36px' }}>
        <div style={{ fontSize: 12, letterSpacing: 2, color: C.accent, textTransform: 'uppercase', marginBottom: 8 }}>Post-Launch</div>
        <h2 style={{ fontSize: 32, fontWeight: 700, color: C.text, marginBottom: 32 }}>Active Management + KPI Window</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginBottom: 22 }}>
          <div style={{ backgroundColor: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 28 }}>
            <div style={{ fontSize: 13, color: C.accent, textTransform: 'uppercase', letterSpacing: 1.5, fontWeight: 600, marginBottom: 16 }}>Months 1–2: Active Optimization</div>
            <div style={{ fontSize: 15, color: C.text, lineHeight: 1.9 }}>
              Weekly optimization calls with Alka<br />
              Sequence performance tuning (subject lines, send times, cadence)<br />
              Reply monitoring and lead routing<br />
              Session 1 content batch in production (March)<br />
              Content Session 2 (recorded, 1–2 hrs)<br />
              Monthly reporting on KPI progress
            </div>
          </div>
          <div style={{ backgroundColor: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 28 }}>
            <div style={{ fontSize: 13, color: C.green, textTransform: 'uppercase', letterSpacing: 1.5, fontWeight: 600, marginBottom: 16 }}>Month 3: Optimization + Handoff</div>
            <div style={{ fontSize: 15, color: C.text, lineHeight: 1.9 }}>
              Content Session 3 (final)<br />
              Messaging refinement from 2+ months of data<br />
              Bi-weekly check-ins<br />
              Abbreviated SOPs for system continuity<br />
              Pilot assessment + next phase recommendation
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 24 }}>
          <div style={{ fontSize: 13, color: C.yellow, textTransform: 'uppercase', letterSpacing: 1.5, fontWeight: 600, marginBottom: 14 }}>60-Day KPI Evaluation (~May 16)</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
            <div style={{ backgroundColor: C.greenDim, border: `1px solid ${C.green}30`, borderRadius: 12, padding: 20 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: C.green, marginBottom: 8 }}>KPIs Met</div>
              <div style={{ fontSize: 15, color: C.text, lineHeight: 1.6 }}>Engagement continues through Month 3 per agreement. Billing continues at $2,000/mo.</div>
            </div>
            <div style={{ backgroundColor: C.redDim, border: `1px solid ${C.red}30`, borderRadius: 12, padding: 20 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: C.red, marginBottom: 8 }}>KPIs Not Met</div>
              <div style={{ fontSize: 15, color: C.text, lineHeight: 1.6 }}>Billing pauses immediately. 30-day optimization period begins at no cost to Alka.</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  // 7: WHAT ALKA PROVIDES
  {
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '52px 60px 36px' }}>
        <div style={{ fontSize: 12, letterSpacing: 2, color: C.accent, textTransform: 'uppercase', marginBottom: 8 }}>Client Dependencies</div>
        <h2 style={{ fontSize: 32, fontWeight: 700, color: C.text, marginBottom: 32 }}>What We Need From Alka</h2>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { item: 'Purchased practitioner list (~1,600 contacts)', when: 'Before Mar 17 launch', status: 'Received', note: 'List received. Verification and segmentation in progress', color: C.green },
            { item: 'Conference attendee list (~1,000 contacts)', when: 'Within 48 hrs of receipt (~late March)', status: 'Pending', note: 'Ingestion process pre-built and ready', color: C.yellow },
            { item: 'Conference schedule + panel format details', when: 'By Mar 24', status: 'Pending', note: 'Needed for collateral and talking points', color: C.yellow },
            { item: 'Approval on outreach copy', when: 'Before Mar 17 launch', status: 'Pending', note: 'All sequences reviewed and signed off before live sending', color: C.red },
            { item: 'Time for 3 content sessions (1–2 hrs each, recorded)', when: 'Monthly: Mar, Apr, May', status: 'Session 1 complete', note: 'Recorded Mar 5. Sessions 2 and 3 scheduled monthly', color: C.green },
            { item: 'Sample product info + collateral', when: 'Before Content Session 1', status: 'Received', note: 'Logo, testimonials, podcast content, product cards received', color: C.green },
          ].map((row, i) => (
            <div key={i} style={{ backgroundColor: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: '16px 22px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ fontSize: 16, fontWeight: 600, color: C.text }}>{row.item}</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: row.color, backgroundColor: row.color + '18', padding: '4px 12px', borderRadius: 8 }}>{row.status}</span>
              </div>
              <div style={{ display: 'flex', gap: 28 }}>
                <span style={{ fontSize: 14, color: C.accent }}>Due: {row.when}</span>
                <span style={{ fontSize: 14, color: C.muted }}>{row.note}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  // 8: DECISIONS NEEDED
  {
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '52px 60px 36px' }}>
        <div style={{ fontSize: 12, letterSpacing: 2, color: C.red, textTransform: 'uppercase', marginBottom: 8 }}>Action Required</div>
        <h2 style={{ fontSize: 32, fontWeight: 700, color: C.text, marginBottom: 32 }}>Decisions Needed Today</h2>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 14 }}>
          {[
            { num: '1', title: 'Scent Qualification Criteria', desc: 'Email 5 in each track qualifies prospects on scent preference before a sample ships. What exact response disqualifies a prospect from receiving a sample?', priority: 'High' },
          ].map((d, i) => (
            <div key={i} style={{ display: 'flex', gap: 18, backgroundColor: d.priority === 'Critical' ? C.redDim : C.card, border: `1px solid ${d.priority === 'Critical' ? C.red + '40' : C.border}`, borderRadius: 14, padding: '20px 24px', alignItems: 'flex-start' }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, backgroundColor: d.priority === 'Critical' ? C.red + '30' : C.accentDim, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: 16, fontWeight: 700, color: d.priority === 'Critical' ? C.red : C.accent }}>{d.num}</span>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
                  <span style={{ fontSize: 17, fontWeight: 600, color: C.text }}>{d.title}</span>
                  <span style={{ fontSize: 11, fontWeight: 700, color: d.priority === 'Critical' ? C.red : d.priority === 'High' ? C.yellow : C.blue, textTransform: 'uppercase', letterSpacing: 1 }}>{d.priority}</span>
                </div>
                <div style={{ fontSize: 15, color: C.muted, lineHeight: 1.6 }}>{d.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  // 9: HANDOFF + SCOPE
  {
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '52px 60px 36px' }}>
        <div style={{ fontSize: 12, letterSpacing: 2, color: C.accent, textTransform: 'uppercase', marginBottom: 8 }}>Ownership</div>
        <h2 style={{ fontSize: 32, fontWeight: 700, color: C.text, marginBottom: 32 }}>What Transfers to Alka at Close</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14, marginBottom: 28 }}>
          {[
            { system: 'Sending Domains (3)', detail: 'Full ownership transferred' },
            { system: 'Sending Inboxes (9) + Instantly Account', detail: 'Credentials handed over' },
            { system: 'Pipeline Tracking System', detail: 'Full ownership transferred' },
            { system: 'Email Sequences + Templates', detail: 'All copy and configs transferred' },
            { system: 'Content Library', detail: 'All assets + source transcripts' },
            { system: 'SOPs', detail: 'Abbreviated operational documentation' },
          ].map((s, i) => (
            <div key={i} style={{ backgroundColor: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: 20 }}>
              <div style={{ fontSize: 15, fontWeight: 600, color: C.text, marginBottom: 8 }}>{s.system}</div>
              <div style={{ fontSize: 14, color: C.muted }}>{s.detail}</div>
            </div>
          ))}
        </div>
        <div style={{ backgroundColor: C.redDim, border: `1px solid ${C.red}30`, borderRadius: 14, padding: 24 }}>
          <div style={{ fontSize: 13, color: C.red, textTransform: 'uppercase', letterSpacing: 1.5, fontWeight: 600, marginBottom: 12 }}>Scope Boundaries</div>
          <div style={{ fontSize: 15, color: C.text, lineHeight: 1.7, marginBottom: 12 }}>
            <span style={{ fontWeight: 600 }}>In scope:</span> Lead nurture for provided contact lists, content creation from monthly sessions, conference follow-up, pipeline tracking, event strategy consulting, abbreviated SOPs.
          </div>
          <div style={{ fontSize: 15, color: C.muted, lineHeight: 1.7 }}>
            <span style={{ fontWeight: 600, color: C.text }}>Out of scope:</span> New lead sourcing, paid advertising, DTC marketing, e-commerce, CRM implementation, trade show booth logistics, outreach to chiropractors or acupuncturists, social media management, website redesign, landing pages, regulatory consulting, full SOP/training package.
          </div>
          <div style={{ marginTop: 14, fontSize: 14, color: C.red, fontWeight: 500 }}>
            Any work outside scope requires a written Change Request signed by both parties before work begins.
          </div>
        </div>
      </div>
    ),
  },
];

export default function AnartiDeck() {
  const [idx, setIdx] = useState(0);
  const total = slides.length;
  const prev = () => setIdx(i => Math.max(0, i - 1));
  const next = () => setIdx(i => Math.min(total - 1, i + 1));

  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: C.bg, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", color: C.text, display: 'flex', flexDirection: 'column' }}>
      <div style={{ width: '100%', flex: 1, backgroundColor: C.bg, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1, overflow: 'auto' }}>
          {slides[idx].content}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 28px', borderTop: `1px solid ${C.border}`, backgroundColor: C.card }}>
          <button onClick={prev} disabled={idx === 0} style={{ padding: '8px 20px', fontSize: 14, fontWeight: 500, color: idx === 0 ? C.muted : C.text, backgroundColor: idx === 0 ? 'transparent' : C.border, border: 'none', borderRadius: 8, cursor: idx === 0 ? 'default' : 'pointer', opacity: idx === 0 ? 0.4 : 1 }}>Previous</button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {slides.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)} style={{ width: i === idx ? 24 : 10, height: 10, borderRadius: 5, backgroundColor: i === idx ? C.accent : C.border, border: 'none', cursor: 'pointer', transition: 'all 0.2s' }} />
            ))}
          </div>
          <button onClick={next} disabled={idx === total - 1} style={{ padding: '8px 20px', fontSize: 14, fontWeight: 500, color: idx === total - 1 ? C.muted : C.text, backgroundColor: idx === total - 1 ? 'transparent' : C.accent, border: 'none', borderRadius: 8, cursor: idx === total - 1 ? 'default' : 'pointer', opacity: idx === total - 1 ? 0.4 : 1 }}>Next</button>
        </div>
      </div>
    </div>
  );
}
