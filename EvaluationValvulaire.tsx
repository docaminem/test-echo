import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/Tabs';
import { EvaluationAortique } from './evaluations/EvaluationAortique';
import { EvaluationMitrale } from './evaluations/EvaluationMitrale';
import { EvaluationTricuspide } from './evaluations/EvaluationTricuspide';
import { CompteRendu } from './CompteRendu';

export const EvaluationValvulaire = () => {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="aortique" className="w-full">
        <TabsList className="grid grid-cols-4 gap-4 mb-6">
          <TabsTrigger value="aortique">Valve Aortique</TabsTrigger>
          <TabsTrigger value="mitrale">Valve Mitrale</TabsTrigger>
          <TabsTrigger value="tricuspide">Valve Tricuspide</TabsTrigger>
          <TabsTrigger value="compte-rendu">Compte Rendu</TabsTrigger>
        </TabsList>

        <TabsContent value="aortique">
          <EvaluationAortique />
        </TabsContent>
        
        <TabsContent value="mitrale">
          <EvaluationMitrale />
        </TabsContent>
        
        <TabsContent value="tricuspide">
          <EvaluationTricuspide />
        </TabsContent>

        <TabsContent value="compte-rendu">
          <CompteRendu />
        </TabsContent>
      </Tabs>
    </div>
  );
};