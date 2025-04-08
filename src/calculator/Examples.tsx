import React from 'react'
import Accordion from 'react-bootstrap/Accordion'

const Examples: React.FC = () => {
  return (
    <Accordion alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>MD Example</Accordion.Header>
        <Accordion.Body>
          <dl className="row small">
            <dt className="col-sm-3">Sprint</dt>
            <dd className="col-sm-9">10 dni</dd>
            <dt className="col-sm-3">Team</dt>
            <dd className="col-sm-9">
              Michal, Mirek, Tomek, Rafal, Kuba, ½ Kacpra
            </dd>
            <dt className="col-sm-3">Initial MD</dt>
            <dd className="col-sm-9">
              <p>5 osób po 10 dni = 50 i 1 osoba po 5 = 5 czyli 55 MD</p>
              <p>100% capacity to 55 MD</p>
            </dd>
            <dt className="col-sm-3 text-truncate">Example</dt>
            <dd className="col-sm-9">
              <p>W sprincie był 1 Bank holiday:</p>
              <p>
                5 osób po 9 dni = 45, a Kacprowi trzeba odjąć pól = 4,5 czyli
                49,5 MD
              </p>
              <p>
                Dodatkowo Michał miał 2 dni wolne więc trzeba mu odjąć 2 dni =
                47,5 MD
              </p>
            </dd>
          </dl>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Capacity Example</Accordion.Header>
        <Accordion.Body>
          <dl className="row small">
            <dt className="col-sm-3">Sprint</dt>
            <dd className="col-sm-9">10 dni</dd>
            <dt className="col-sm-3">Team</dt>
            <dd className="col-sm-9">
              Michal, Mirek, Tomek, ½ Kuba, ½ Kacpra
            </dd>
            <dt className="col-sm-3">Initial Capacity</dt>
            <dd className="col-sm-9">18 SP</dd>
            <dt className="col-sm-3">Capacity Per Day</dt>
            <dd className="col-sm-9">
              <p>18 SP na 10 dni, 1.8 SP na dzień</p>
              <p>
                1.8 SP / 4 osoby = 0.45 SP per developer na
                dzień (full-time){' '}
              </p>
              <p>Kacper: ~0.225 SP</p>
              <p>Kuba: ~0.225 SP</p>
            </dd>
            <dt className="col-sm-3 text-truncate">Example</dt>
            <dd className="col-sm-9">
              <p>
                Kacper bierze 2 dni wolnego - odejmujemy mu za to 0.45 pkt więc
                capacity = 17.55 SP
              </p>
              <p>Zaniżamy do 17 SP (Szacując capacity zawsze lepiej zaniżyć.)</p>
            </dd>
          </dl>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default Examples
