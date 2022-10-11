<?php

namespace App\Controller\Admin;

use App\Entity\Scenario;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class ScenarioCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Scenario::class;
    }
}
