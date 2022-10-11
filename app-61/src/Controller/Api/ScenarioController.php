<?php

namespace App\Controller\Api;

use App\Entity\Scenario;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ScenarioController extends AbstractController
{
    #[Route('/api/scenario/{id}', name: 'app_scenario')]
    public function index(Scenario $scenario): Response
    {
        return new JsonResponse($scenario);
    }
}
