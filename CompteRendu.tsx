import React, { useState } from 'react';
import { MeasurementInput } from './ui/MeasurementInput';
import { generateReport } from '../utils/report-generator';

interface EchoMeasurements {
  // Ventricule gauche
  dtdvg: number;
  dtsvg: number;
  septum: number;
  pp: number;
  fevg: number;
  
  // Oreillette gauche
  ogSurface: number;
  ogVolume: number;
  
  // Aorte
  aorteAnneau: number;
  aorteSinus: number;
  aorteTubulaire: number;
  
  // Pressions
  paps: number;
  presVd: number;
  
  // VCI
  vci: number;
  collapsibilite: number;

  // Doppler
  fluxMitralE: number;
  fluxMitralA: number;
  tdeMitral: number;
  eaSeptal: number;
  eaLateral: number;
  itmVg: number;
  itvSousAo: number;
  itvPulm: number;
}

export const CompteRendu = () => {
  const [measurements, setMeasurements] = useState<EchoMeasurements>({
    dtdvg: 0,
    dtsvg: 0,
    septum: 0,
    pp: 0,
    fevg: 0,
    ogSurface: 0,
    ogVolume: 0,
    aorteAnneau: 0,
    aorteSinus: 0,
    aorteTubulaire: 0,
    paps: 0,
    presVd: 0,
    vci: 0,
    collapsibilite: 0,
    fluxMitralE: 0,
    fluxMitralA: 0,
    tdeMitral: 0,
    eaSeptal: 0,
    eaLateral: 0,
    itmVg: 0,
    itvSousAo: 0,
    itvPulm: 0
  });

  const [conclusion, setConclusion] = useState('');

  const handleChange = (name: keyof EchoMeasurements) => (value: number) => {
    setMeasurements(prev => ({ ...prev, [name]: value }));
  };

  const handleGenerateReport = () => {
    const report = generateReport(measurements);
    setConclusion(report);
  };

  return (
    <div className="space-y-8">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Ventricule Gauche</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <MeasurementInput
            label="DTDVG"
            value={measurements.dtdvg}
            onChange={handleChange('dtdvg')}
            unit="mm"
          />
          <MeasurementInput
            label="DTSVG"
            value={measurements.dtsvg}
            onChange={handleChange('dtsvg')}
            unit="mm"
          />
          <MeasurementInput
            label="Septum"
            value={measurements.septum}
            onChange={handleChange('septum')}
            unit="mm"
          />
          <MeasurementInput
            label="Paroi postérieure"
            value={measurements.pp}
            onChange={handleChange('pp')}
            unit="mm"
          />
          <MeasurementInput
            label="FEVG"
            value={measurements.fevg}
            onChange={handleChange('fevg')}
            unit="%"
          />
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Doppler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <MeasurementInput
            label="Onde E mitrale"
            value={measurements.fluxMitralE}
            onChange={handleChange('fluxMitralE')}
            unit="cm/s"
          />
          <MeasurementInput
            label="Onde A mitrale"
            value={measurements.fluxMitralA}
            onChange={handleChange('fluxMitralA')}
            unit="cm/s"
          />
          <MeasurementInput
            label="TDE mitral"
            value={measurements.tdeMitral}
            onChange={handleChange('tdeMitral')}
            unit="ms"
          />
          <MeasurementInput
            label="E/a septal"
            value={measurements.eaSeptal}
            onChange={handleChange('eaSeptal')}
          />
          <MeasurementInput
            label="E/a latéral"
            value={measurements.eaLateral}
            onChange={handleChange('eaLateral')}
          />
          <MeasurementInput
            label="ITV sous-aortique"
            value={measurements.itvSousAo}
            onChange={handleChange('itvSousAo')}
            unit="cm"
          />
          <MeasurementInput
            label="ITV pulmonaire"
            value={measurements.itvPulm}
            onChange={handleChange('itvPulm')}
            unit="cm"
          />
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Conclusion</h2>
        <textarea
          value={conclusion}
          onChange={(e) => setConclusion(e.target.value)}
          className="w-full h-40 p-4 border rounded-md"
          placeholder="Conclusion de l'examen..."
        />
        <div className="mt-4">
          <button
            onClick={handleGenerateReport}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Générer le compte-rendu
          </button>
        </div>
      </div>
    </div>
  );
};