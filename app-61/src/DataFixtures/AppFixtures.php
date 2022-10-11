<?php

namespace App\DataFixtures;

use App\Entity\App;
use App\Entity\SecretFormula;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $clientApp = new App();
        $clientApp->setApiKey('Ultr4-s3cr3t-AP1-K3Y');
        $clientApp->setRoles(['ROLE_ADMIN']);
        $manager->persist($clientApp);

        $secretFormula = new SecretFormula('Super-soldier serum');
        $manager->persist($secretFormula);

        $manager->flush();
    }
}
