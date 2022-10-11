<?php

namespace App\Controller;

use App\Entity\SecretFormula;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SecretFormulaController extends AbstractController
{
    #[Route('/secret/formula/{id}', name: 'app_secret_formula')]
    public function index(SecretFormula $secretFormula): Response
    {
        return new JsonResponse($secretFormula);
    }
}
